import { legacy_createStore as createStore } from 'redux';

const initialState = {
  posts: [],
  postId: null,
  userId: 0,
  details: null,
  comments: null,
};

const SET_POSTS = 'SET_POSTS';
const SET_POST_ID = 'SET_POST_ID';
const SET_USER_ID = 'SET_USER_ID';
const SET_DETAILS = 'SET_DETAILS';
const SET_COMMENTS = 'SET_COMENTS';

export const actions = {
  setPosts: posts => ({
    type: SET_POSTS, posts,
  }),
  setPostId: postId => ({
    type: SET_POST_ID, postId,
  }),
  setUserId: userId => ({
    type: SET_USER_ID, userId,
  }),
  setDetails: details => ({
    type: SET_DETAILS, details,
  }),
  setComments: comments => ({
    type: SET_COMMENTS, comments,
  }),
};

export const selectors = {
  getPosts: state => state.posts,
  getPostId: state => state.postId,
  getUserId: state => state.userId,
  getDetails: state => state.details,
  getComments: state => state.comments,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case SET_POST_ID:
      return {
        ...state,
        postId: action.postId,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId,
      };
    case SET_DETAILS:
      return {
        ...state,
        details: action.details,
      };
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
