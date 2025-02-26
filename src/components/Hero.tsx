import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const targetDate = new Date('2025-03-08T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900 animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-glow">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
            SYNERGIA
          </span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">Where Events Meets Motorsports</p>
        <div className="flex gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-red-500">{timeLeft.days}</p>
            <p className="text-xs sm:text-sm text-gray-400">DAYS</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-red-500">{timeLeft.hours}</p>
            <p className="text-xs sm:text-sm text-gray-400">HOURS</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-red-500">{timeLeft.minutes}</p>
            <p className="text-xs sm:text-sm text-gray-400">MINUTES</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-red-500">{timeLeft.seconds}</p>
            <p className="text-xs sm:text-sm text-gray-400">SECONDS</p>
          </div>
        </div>
        <button
          onClick={scrollToNext}
          className="animate-bounce bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          Explore <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
