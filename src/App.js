  import React, { useState, useEffect, useRef } from 'react';
  import axios from 'axios';
  import Navbar from './components/Navbar';
  import ArticleList from './components/ArticleList';
  import Pagination from './components/Pagination';
  import Favorites from './components/Favorites';
  import Footer from './components/Footer';
  import './App.css';

  const API_KEY = 'e32e02906cd543e1965799d0fa0a0025';
  const BASE_URL = 'https://newsapi.org/v2';

  function App() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const footerRef = useRef(null);

    // Fetch favorites from local storage when the component mounts
    useEffect(() => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(savedFavorites);
    }, []);

    // Update local storage whenever the favorites state changes
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
      if (!showFavorites) {
        const fetchArticles = async () => {
          try {
            const response = await axios.get(`${BASE_URL}/top-headlines`, {
              params: {
                country: 'in',
                category,
                language: 'en',
                page: currentPage,
                pageSize: 20,
                apiKey: API_KEY,
              },
            });
            setArticles(response.data.articles);
            setTotalResults(response.data.totalResults);
          } catch (error) {
            console.error("Error fetching the news articles: ", error);
          }
        };
        fetchArticles();
      }
    }, [category, currentPage, showFavorites]);

    const handleAddToFavorites = (article) => {
      if (!favorites.some(fav => fav.url === article.url)) {
        const newFavorites = [...favorites, article];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      }
    };

    const handleRemoveFromFavorites = (article) => {
      const newFavorites = favorites.filter(fav => fav.url !== article.url);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const handleContactClick = () => {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSearch = async (query) => {
      try {
        const response = await axios.get(`${BASE_URL}/everything`, {
          params: {
            q: query,
            language: 'en',
            sortBy: 'publishedAt',
            apiKey: API_KEY,
          },
        });
        setArticles(response.data.articles);
        setTotalResults(response.data.totalResults);
        setCurrentPage(1);
        setShowFavorites(false);
      } catch (error) {
        console.error("Error searching for articles: ", error);
      }
    };

    return (
      <div className="App bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col">
        <Navbar 
          setCategory={setCategory} 
          onContactClick={handleContactClick} 
          onSearch={handleSearch} 
          setShowFavorites={setShowFavorites}
          showFavorites={showFavorites}
        />
        <div className="flex-grow max-w-screen-xl mx-auto p-4">
          {showFavorites ? (
            <Favorites 
              favorites={favorites} 
              handleRemoveFromFavorites={handleRemoveFromFavorites} 
            />
          ) : (
            <div>
              <ArticleList 
                articles={articles} 
                favorites={favorites}
                onAddToFavorites={handleAddToFavorites} 
                onRemoveFromFavorites={handleRemoveFromFavorites}
              />
              <Pagination
                currentPage={currentPage}
                totalResults={totalResults}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
        <Footer ref={footerRef} />
      </div>
    );
  }

  export default App;
