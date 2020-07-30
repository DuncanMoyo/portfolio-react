import React from 'react';
import About from './components/About'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import WorkDone from './components/WorkDone';
import Footer from './components/Footer';
import Contact from './components/Contact';

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
