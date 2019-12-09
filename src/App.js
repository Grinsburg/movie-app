import React from 'react';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Movie from './components/Movie';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Movie />
      <Footer />
    </div>
  );
}

export default App;
