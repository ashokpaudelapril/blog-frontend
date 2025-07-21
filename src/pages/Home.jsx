import React from 'react';
import PostList from '../components/PostList';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
     
      <Header/>

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
      <Footer/>
    </div>
  );
}

export default Home;