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
  useScrollFadeIn();

  return (
    <div>
      <Header />
      <main>
        <section class="main" className='fade-in'><About /></section>
        <section class="main" className='fade-in'><Projects /></section>
        <section class="main" className='fade-in'><Experience /></section>
        <section class="main" className='fade-in'><Education /></section>
        <section class="main" className='fade-in'><Certifications /></section>
        <section class="main" className='fade-in'><Skills /></section>
        <section class="main" className='fade-in'><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
