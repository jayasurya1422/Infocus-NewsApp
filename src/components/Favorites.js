import React from 'react';
import Article from './Article';

const Favorites = ({ favorites, handleRemoveFromFavorites }) => {
  return (
    <div className="flex-grow p-4">
      <h2 className="text-3xl font-semibold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorite articles yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((article) => (
            <Article
              key={article.url}
              article={article}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
