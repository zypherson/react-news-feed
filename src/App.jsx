import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('general');

  return (
    <>
      <Navbar
        onSearch={setSearchTerm}
        onCategoryChange={(cat) => {
          setCategory(cat);
          setSearchTerm(''); // clear search when picking a category
        }}
      />

      <Home searchTerm={searchTerm} category={category} />
    </>
  );
}

export default App;
