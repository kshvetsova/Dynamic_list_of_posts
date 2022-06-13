import React, { useEffect } from 'react';
import './PostsList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../store';
import { getUserPosts } from '../../api/posts';
import { Loader } from '../Loader';

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectors.getPosts);
  const userId = useSelector(selectors.getUserId);
  const postId = useSelector(selectors.getPostId);

  useEffect(() => {
    getUserPosts(userId).then(res => dispatch(actions.setPosts(res)));
  }, [userId]);

  return !posts || posts.length === 0 ? <Loader /> : (
    <div className="PostsList">

      <h2>{`Posts: ${posts.length}`}</h2>
      <ul className="PostsList__list">
        {posts.map(post => (
          <li className="PostsList__item" key={post.id}>
            <div>
              <b>{`[User #${post.userId}]: `}</b>
              {post.title}
            </div>
            {postId !== post.id ? (
              <button
                type="button"
                className="PostsList__button button"
                onClick={() => dispatch(actions.setPostId(post.id))}
              >
                Open
              </button>
            ) : (
              <button
                type="button"
                className="button"
                onClick={() => dispatch(actions.setPostId(null))}
              >
                Close
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
