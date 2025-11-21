import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import NewsCard from '../components/NewsCard';

export default function Home({ searchTerm, category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      setError(null);

      const endpoint = searchTerm
        ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&pageSize=9&apiKey=${apiKey}`
        : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=9&apiKey=${apiKey}`;

      try {
        const res = await fetch(endpoint);
        const data = await res.json();

        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          setError('Failed to load news');
        }
      } catch {
        setError('Something went wrong while fetching news');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [searchTerm, category, apiKey]);

  if (loading) return <p className="status">Loading news...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="home">
      <h2>
        {searchTerm
          ? `Results for "${searchTerm}"`
          : `${category.charAt(0).toUpperCase() + category.slice(1)} News`
        }
      </h2>

      <div className="news-grid">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage || 'https://placehold.co/600x400?text=No+Image'}
              author={article.author}
              date={article.publishedAt}
              url={article.url}
            />
          ))
        ) : (
          <p className="status">No articles found.</p>
        )}
      </div>
    </div>
  );
}
