import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 border-t border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-xl text-gray-700 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://flowbite.com/" className="hover:underline text-xl font-semibold">InFocus™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-xl font-medium text-gray-700 dark:text-gray-400 sm:mt-0">
          <li className="mx-4 md:mb-0">
            <a href="#about" className="hover:underline">About</a>
          </li>
          <li className="mx-4 md:mb-0">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </li>
          <li className="mx-4 md:mb-0">
            <a href="#licensing" className="hover:underline">Licensing</a>
          </li>
          <li className="text-xl">
            <a href="#contact" className="hover:underline">Contact - +91 8106391368</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
