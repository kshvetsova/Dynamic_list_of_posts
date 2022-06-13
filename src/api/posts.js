import { request } from './api';

export const getUserPosts = async(userId) => {
  try {
    const result = await request('posts');

    return result.filter(res => (
      +userId ? res.userId === +userId : res
    ));
  } catch (error) {
    return [];
  }
};

export const getPostDetails = async(postId) => {
  const result = await request(`posts/${postId}`);

  return result;
};
