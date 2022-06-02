import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  getDetails,
  setDetails,
  getPostId,
  getComments,
  setComments,
} from '../../store';
import { NewCommentForm } from '../NewCommentForm';
import './PostDetails.scss';
import { getPostDetails } from '../../api/posts';
import { getPostComments, deleteComment } from '../../api/comments';
import { Loader } from '../Loader';

export const PostDetails = () => {
  const details = useSelector(getDetails);
  const postId = useSelector(getPostId);
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    getPostDetails(postId).then(res => dispatch(setDetails(res)));
    getPostComments(postId).then(res => dispatch(setComments(res)));
  }, [postId]);

  return !comments || !details ? <Loader /> : (
    <div className="PostDetails">
      <h2>Post details:</h2>
      <h3>{details.title}</h3>

      <section className="PostDetails__post">
        <p>{details.body}</p>
      </section>

      <section className="PostDetails__comments">
        {comments && (
          <button
            type="button"
            className={classNames('button', { visible: comments.length > 0 })}
            onClick={() => setHidden(!hidden)}
          >
            {`${!hidden ? 'Show' : 'Hide'} ${comments.length} comments`}
          </button>
        )}
        <ul className="PostDetails__list">
          {hidden && comments.map(comment => (
            <li className="PostDetails__list-item" key={comment.id}>
              <button
                type="button"
                className="PostDetails__remove-button button"
                onClick={async() => {
                  await deleteComment(comment.id);
                  getPostComments(postId)
                    .then(res => dispatch(setComments(res)));
                }}
              >
                X
              </button>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm />
        </div>
      </section>
    </div>
  );
};
