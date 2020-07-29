import React from 'react';
import './App.css';  
import About from './components/About/Index'
import Navbar from './components/Navbar/Index';
import Intro from './components/Intro/Index';
import WorkDone from './components/WorkDone/Index';
import Footer from './components/Footer/Index';
import Contact from './components/Contact/Index';

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
