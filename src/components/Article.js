import React from 'react';

const Article = ({ article, onAddToFavorites, onRemoveFromFavorites, isFavorite }) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFromFavorites(article);
    } else {
      onAddToFavorites(article);
    }
  };

  return (
    <div className="max-w-sm mx-auto mb-8 h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105 h-full flex flex-col">
        {article.urlToImage && (
          <div className="h-48 w-full overflow-hidden">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
          </div>
          <div className="flex flex-col items-center mt-2">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mb-2"
            >
              Read More
            </a>
            <button
              className={`px-4 py-2 ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white rounded hover:${isFavorite ? 'bg-red-600' : 'bg-blue-600'} transition-colors duration-300`}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
