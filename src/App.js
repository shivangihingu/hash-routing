import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navigation />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
