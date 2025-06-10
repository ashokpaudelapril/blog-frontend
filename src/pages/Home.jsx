import React from 'react';
import PostList from '../components/PostList';
// import PostForm from '../components/PostForm'; // Removed

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header Section */}
      <header className="bg-blue-800 text-white text-center py-10 mb-12 shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">The Philosophy Blog</h1>
        <p className="text-lg md:text-xl mt-3 text-blue-100">Insights and musings on the nature of existence</p>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed: Post Form Section */}

        {/* Post List Section */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Recent Musings</h2>
          <PostList />
        </section>
      </main>

      {/* Footer (Optional) */}
      <footer className="mt-16 py-8 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} The Philosophy Blog. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-400">Powered by MERN Stack & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default Home;