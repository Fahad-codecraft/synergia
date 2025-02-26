import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-6 sm:py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Synergia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;