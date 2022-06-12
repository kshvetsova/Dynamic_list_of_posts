import { request } from './api';

// eslint-disable-next-line consistent-return
export const getUserPosts = async(userId) => {
  try {
    const result = await request('posts');

    result.filter(res => (
      +userId ? res.userId === +userId : res.userId
    ));
  } catch (error) {
    return [];
  }
};

export const getPostDetails = async(postId) => {
  const result = await request(`posts/${postId}`);

  return result;
};
