import React, { useState } from 'react';
import infocusLogo from '../assets/infocus.jpeg'; // Replace with your actual logo image file

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const Navbar = ({ setCategory, onSearch, setShowFavorites, showFavorites }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  const handleShowArticles = () => {
    setShowFavorites(false);
  };

  const scrollToFooter = () => {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 text-gray-800 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="/" className="flex items-center" onClick={handleShowArticles}>
            <img
              src={infocusLogo}
              className="h-12 w-auto rounded-lg"
              alt="InFocus Logo"
            />
            <span className="m-4 self-center text-3xl font-bold tracking-wide">
              InFocus
            </span>
          </a>
        </div>
        <form onSubmit={handleSearch} className="flex items-center space-x-3">
          <input
            type="text"
            className="text-lg px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-lg px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Search
          </button>
        </form>
        <div className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
          <a href="/" className="text-lg text-gray-800 hover:text-purple-700 transition duration-200" onClick={handleShowArticles}>
            Home
          </a>
          <div className="relative">
            <button
              id="dropdownNavbarLink"
              className="text-lg text-gray-800 hover:text-purple-700 transition duration-200"
              onClick={toggleDropdown}
            >
              Categories
              <svg
                className="w-2.5 h-2.5 ml-1 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`${isDropdownOpen ? 'block' : 'hidden'} absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
            >
              <ul className="py-2 text-xl text-gray-800 dark:text-gray-400" aria-labelledby="dropdownNavbarLink">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        setCategory(cat);
                        closeDropdown();
                        handleShowArticles();
                      }}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className="text-lg text-gray-800 hover:text-purple-700 transition duration-200"
            onClick={scrollToFooter}
          >
            Contact
          </button>
          <button
            className="text-lg text-gray-800 hover:text-purple-700 transition duration-200"
            onClick={showFavorites ? handleShowArticles : handleShowFavorites}
          >
            {showFavorites ? 'Back to Articles' : 'Favorites'}
          </button>
        </div>
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleDropdown}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
