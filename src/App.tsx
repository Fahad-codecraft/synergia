import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Lenis from 'lenis';
import CarScene from './components/Car';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <>
      {/* <div className='fixed h-full w-full inset-0 z-0'>
        <CarScene />
      </div> */}
      <div className="min-h-screen bg-transparent text-white relative">
        <Hero />
        <About />
        <Events />
        <Registration />
        {/* <Gallery /> */}
        <Sponsors />
        <Footer />
      </div>
    </>

  );
}

export default App;