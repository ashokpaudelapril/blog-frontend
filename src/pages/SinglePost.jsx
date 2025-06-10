import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import postService from '../services/postService';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPost(id);
        setPost(data);
      } catch (err) {
        console.error('Error fetching single post:', err);
        setError('Post not found or an error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center text-2xl mt-12 text-gray-600">Loading post...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-2xl mt-12">{error}</div>;
  }

  if (!post) {
    return <div className="text-center text-gray-600 text-xl mt-12">No post data available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-600 text-md md:text-lg mb-6 border-b pb-4">
            By <span className="font-semibold">{post.author}</span> on {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4" style={{ whiteSpace: 'pre-wrap' }}>
            {post.content}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 shadow-md">
            &larr; Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;