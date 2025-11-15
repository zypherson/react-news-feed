import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Navbar onSearch={setSearchTerm} />
      <Home searchTerm={searchTerm} />
    </>
  );
}

export default App;
