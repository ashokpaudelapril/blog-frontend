import React, { useState } from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 py-8 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} The Open Heart Blog. All rights reserved.</p>
      <p className="text-sm mt-2 text-gray-400">
        Powered by MERN Stack & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;