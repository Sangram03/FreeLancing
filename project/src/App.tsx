import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;