import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostId, getUserId, setUserId, setPostId } from './store';
import './App.scss';
import './styles/general.scss';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';

export const App = () => {
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();
  const postId = useSelector(getPostId);

  return (
    <div className="App">
      <header className="App__header">
        <label>
          Select a user: &nbsp;

          <select
            className="App__user-selector"
            value={userId}
            onChange={({ target }) => {
              dispatch(setUserId(target.value));
              dispatch(setPostId(null));
            }}
          >
            <option value="0">All users</option>
            <option value="1">Leanne Graham</option>
            <option value="2">Ervin Howell</option>
            <option value="3">Clementine Bauch</option>
            <option value="4">Patricia Lebsack</option>
            <option value="5">Chelsey Dietrich</option>
            <option value="6">Mrs. Dennis Schulist</option>
            <option value="7">Kurtis Weissnat</option>
            <option value="8">Nicholas Runolfsdottir V</option>
            <option value="9">Glenna Reichert</option>
          </select>
        </label>
      </header>
      <main className="App__main">
        <div className="App__sidebar">
          <PostsList />
        </div>
        <div className="App__content">
          {postId && <PostDetails />}
        </div>
      </main>
    </div>
  );
};
