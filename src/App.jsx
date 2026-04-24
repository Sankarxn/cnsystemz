import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import LatestWorks from './components/LatestWorks.jsx';
import ProductListing from './components/ProductListing.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <LatestWorks />
        <ProductListing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
