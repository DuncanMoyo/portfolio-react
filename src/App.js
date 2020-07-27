import React from 'react';
import './App.css';
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
