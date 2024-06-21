import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Trigger onSearch function with current query state
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
