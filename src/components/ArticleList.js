import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, favorites, onAddToFavorites, onRemoveFromFavorites }) => {
  if (!articles) {
    return <div>Loading...</div>;
  }

  const isFavorite = (article) => favorites.some(fav => fav.url === article.url);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <Article 
          key={article.url} 
          article={article}
          isFavorite={isFavorite(article)}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
        /> 
      ))}
    </div>
  );
};

export default ArticleList;
