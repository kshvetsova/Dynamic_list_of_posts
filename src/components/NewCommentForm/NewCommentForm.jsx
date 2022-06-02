import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { setComments, getPostId } from '../../store';
import './NewCommentForm.scss';
import { addComment, getPostComments } from '../../api/comments';

const postNew = {
  name: '',
  email: '',
  body: '',
};

export const NewCommentForm = () => {
  const dispatch = useDispatch();
  const postId = useSelector(getPostId);
  const [post, setPost] = useState(postNew);
  const { name, email, body } = post;

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (name && email && body) {
      await addComment({
        ...post, postId,
      });
      const res = await getPostComments(postId);

      dispatch(setComments(res));
      setPost(postNew);
    }
  };

  const handleChange = (e) => {
    const { value, name: item } = e.target;

    setPost({
      ...post,
      [item]: value.trimStart(),
    });
  };

  return (
    <form className="NewCommentForm" onSubmit={handleSubmit}>
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          pattern="\w+"
          className="NewCommentForm__input"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="NewCommentForm__input"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type comment here"
          className="NewCommentForm__input"
          value={body}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className={classNames('NewCommentForm__submit-button button', {
          visible: name && email && body,
        })}
      >
        Add a comment
      </button>
    </form>
  );
};
