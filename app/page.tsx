import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
