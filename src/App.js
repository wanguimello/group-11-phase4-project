// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resources from './components/Resources';
import ChartComponent from './components/ChartComponent';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <ChartComponent />
    </div>
  );
}

export default App;
