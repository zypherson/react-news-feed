import React from 'react';
import '../styles/NewsCard.css';

export default function NewsCard({ title, description, imageUrl, author, date, url }) {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} className="news-image" />
      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">{description}</p>
        <div className="news-footer">
          <span className="news-meta">
            {author ? `By ${author}` : 'Unknown author'} • {new Date(date).toLocaleDateString()}
          </span>
          <a href={url} target="_blank" rel="noopener noreferrer" className="read-more">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}