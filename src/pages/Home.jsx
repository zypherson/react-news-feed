import React from 'react';
import '../styles/Home.css';
import NewsCard from '../components/NewsCard';

const mockArticles = [
  {
    title: "React 19 Released — What’s New",
    description: "React 19 introduces new features and performance improvements for developers.",
    imageUrl: "https://placehold.co/600x400?text=React+19",
    author: "Dan Abramov",
    date: "2025-10-25",
    url: "https://react.dev/blog",
  },
  {
    title: "JavaScript Remains #1 Language in 2025",
    description: "Developers continue to choose JavaScript for its versatility and ecosystem.",
    imageUrl: "https://placehold.co/600x400?text=JavaScript",
    author: "MDN Web Docs",
    date: "2025-10-26",
    url: "https://developer.mozilla.org/",
  },
  {
    title: "AI Revolutionizes Frontend Development",
    description: "AI tools now assist developers in writing, testing, and optimizing UI code.",
    imageUrl: "https://placehold.co/600x400?text=AI+Frontend",
    author: "OpenAI Dev Team",
    date: "2025-10-27",
    url: "https://openai.com/",
  },
];

export default function Home() {
  return (
    <div className="home">
      <h2>Top Headlines</h2>
      <div className="news-grid">
        {mockArticles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
}
