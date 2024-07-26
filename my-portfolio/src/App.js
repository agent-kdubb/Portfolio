import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Articles />
        <Experience />
        <Education />
        <Skills />
        <Contact /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
