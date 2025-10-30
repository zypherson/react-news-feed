import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">NewsFeed</h1>
      <input type="text" placeholder="Search news..." className="search-bar" />
    </nav>
  );
}
