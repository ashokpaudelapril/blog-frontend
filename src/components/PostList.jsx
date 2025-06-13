import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import postService from '../services/postService';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg mt-8"><p>Loading posts...</p><p>Please Wait for 30 seconds or so for Database to load my writings.</p></div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg mt-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Posts</h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                <Link to={`/post/${post._id}`} className="hover:text-blue-600 transition duration-300">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 leading-relaxed line-clamp-3">
                {post.content}
              </p>
              <Link to={`/post/${post._id}`} className="mt-4 inline-block text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">No posts available yet. Be the first to create one!</p>
      )}
    </div>
  );
}

export default PostList;