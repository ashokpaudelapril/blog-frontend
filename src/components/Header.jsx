import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white text-center py-10 mb-12 shadow-lg">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        The Open Heart Blog
      </h1>
      <p className="text-lg md:text-xl mt-3 text-blue-100">
        Insights and musings on the nature of existence
      </p>
    </header>
  );
};

export default Header;