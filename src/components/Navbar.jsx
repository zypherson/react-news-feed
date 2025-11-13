import React, { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

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
    </nav>
  );
}
