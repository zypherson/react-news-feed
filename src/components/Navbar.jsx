import React, { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar({ onSearch, onCategoryChange }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
      onCategoryChange(''); // reset category when searching
    }
  };

  const categories = [
    "general",
    "business",
    "technology",
    "sports",
    "health",
    "science",
    "entertainment"
  ];

  return (
    <nav className="navbar">
      <h1 className="logo">NewsFeed</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-bar"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="category-row">
        {categories.map((cat) => (
          <button
            key={cat}
            className="category-btn"
            onClick={() => onCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
