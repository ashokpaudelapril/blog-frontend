import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/api/posts/';

// Get all posts
const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get single post by ID
const getPost = async (id) => {
  // Note: You need to ensure the ID is properly appended to the API_URL,
  // For consistency, it's good practice to add a trailing slash to the base API_URL
  // and then just append the ID. If your backend expects /api/posts/:id
  // this is fine. If it expects /api/posts/id then remove the trailing slash above.
  const response = await axios.get(API_URL + id);
  return response.data;
};

const postService = {
  getPosts,
  getPost,
};

export default postService;