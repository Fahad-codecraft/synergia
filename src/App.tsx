import { useEffect } from 'react';
// import { ChevronDown, Timer, Users, MapPin, Calendar } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Lenis from 'lenis';
import Car from './components/Car';

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
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Car />
      <About />
      <Events />
      <Registration />
      {/* <Gallery /> */}
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;