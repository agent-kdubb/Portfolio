import React from 'react';
import './main.css';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import useScrollFadeIn from './scrollEffects';


const App = () => {

  document.addEventListener('scroll', function() {
    const headers = document.querySelectorAll('.section-header');
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight / 1.5; 
  
    headers.forEach(header => {
      const rect = header.getBoundingClientRect();
      const headerTop = rect.top;
  
      if (headerTop < threshold && headerTop + rect.height > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });
  });

  useScrollFadeIn();

  return (
    <div>
      <Header />
      <main>
        <section className='fade-in'><About /></section>
        <section className='fade-in'><Projects /></section>
        <section className='fade-in'><Experience /></section>
        <section className='fade-in'><Education /></section>
        <section className='fade-in'><Certifications /></section>
        <section className='fade-in'><Skills /></section>
        <section className='fade-in'><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
