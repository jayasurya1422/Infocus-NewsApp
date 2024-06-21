import React from 'react';

const Pagination = ({ currentPage, totalResults, setCurrentPage }) => {
  const totalPages = Math.ceil(totalResults / 20); // assuming 20 articles per page

  return (
    <div className="pagination flex items-center justify-center space-x-4 mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
      >
        Previous
      </button>
      <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
