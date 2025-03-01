import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import About from '../components/About';
import Registration from '../components/Registration';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import EventsPreview from '../components/EventsPreview';
import Lenis from 'lenis';

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  const [loading, setLoading] = useState(true);


  // Function to handle loader completion
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <>
          <Hero />
          <About />
          <EventsPreview />
          <Registration />
          {/* <Sponsors /> */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
