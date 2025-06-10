import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Your blog's home page
import SinglePost from './pages/SinglePost'; // Page for individual blog posts
import './index.css'; // Make sure this is linked to your Tailwind CSS

function App() {
  return (
    // BrowserRouter wraps your entire application, enabling routing
    <Router>
      {/* Routes define your application's different paths */}
      <Routes>
        {/* The Home component will render when the URL is "/" */}
        <Route path="/" element={<Home />} />

        {/* The SinglePost component will render for URLs like "/post/123" */}
        {/* The ":id" is a URL parameter that can be accessed in SinglePost */}
        <Route path="/post/:id" element={<SinglePost />} />

        {/* You can add more routes here if your blog expands, e.g., an /about page */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;