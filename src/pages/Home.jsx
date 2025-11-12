/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import NewsCard from '../components/NewsCard';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${apiKey}`
        );
        const data = await res.json();

        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          setError('Failed to load news');
        }
      } catch (err) {
        setError('Something went wrong while fetching news');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [apiKey]);

  if (loading) return <p className="status">Loading news...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="home">
      <h2>Top Headlines</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.urlToImage || 'https://placehold.co/600x400?text=No+Image'}
            author={article.author}
            date={article.publishedAt}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}
