import React from 'react';
import './App.css';
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import WorkDone from './components/WorkDone/WorkDone';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <WorkDone />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
