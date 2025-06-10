import React, { useState } from 'react';
import postService from '../services/postService';

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!title || !content) {
      setError('Title and Content are required to create a post!');
      return;
    }

    try {
      const newPost = await postService.createPost({ title, content, author });
      setMessage('Post created successfully!');
      setTitle('');
      setContent('');
      setAuthor('');
      if (onPostCreated) {
        onPostCreated(newPost); // Callback to refresh posts
      }
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err.response?.data?.message || 'Failed to create post. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 bg-white rounded-xl shadow-lg border border-gray-100 max-w-2xl">
      {message && <p className="text-green-600 text-center text-lg mb-4 font-medium">{message}</p>}
      {error && <p className="text-red-600 text-center text-lg mb-4 font-medium">{error}</p>}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-800 text-lg font-semibold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g., The Nature of Reality"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-800 text-lg font-semibold mb-2">
            Content:
          </label>
          <textarea
            id="content"
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-48 resize-y transition duration-200"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Write your philosophical masterpiece here..."
          ></textarea>
        </div>
        <div className="mb-8">
          <label htmlFor="author" className="block text-gray-800 text-lg font-semibold mb-2">
            Author (Optional):
          </label>
          <input
            type="text"
            id="author"
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your Name or Pseudonym"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
          >
            Submit New Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;