import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900 animate-gradient"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-8xl font-bold mb-6 animate-glow">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
            SYNERGIA
          </span>
        </h1>
        <p className="text-xl mb-8 text-gray-300">Where Technology Meets Motorsports</p>
        <div className="flex gap-6 justify-center mb-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">24</p>
            <p className="text-sm text-gray-400">DAYS</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">12</p>
            <p className="text-sm text-gray-400">HOURS</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">36</p>
            <p className="text-sm text-gray-400">MINUTES</p>
          </div>
        </div>
        <button
          onClick={scrollToNext}
          className="animate-bounce bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex justify-center items-center gap-2"
        >
          <span>Explore</span>
          <ChevronDown size={20} className="mt-[1px]" />
        </button>

      </div>
    </div>
  );
};

export default Hero;