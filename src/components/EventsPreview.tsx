import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Cpu, Bot, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EventsPreview = () => {
  const navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);



  useEffect(() => {
    gsap.fromTo(".event-pres1", 
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".event-pres1",
          start: "top 80%",
          end: "top 30%",
          scrub: true
      }
    }
    );

    gsap.fromTo(".event-pres2", 
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".event-pres2",
          start: "top 80%",
          end: "top 30%",
          scrub: true
      }
    }
    );
    gsap.fromTo(".event-pres3", 
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".event-pres2",
          start: "top 80%",
          end: "top 30%",
          scrub: true
      }
    }
    );

  }, []);


  return (
    <div id="events" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Racing track background */}
      <div className="absolute inset-0">
        <div className="absolute w-[200%] h-[200px] border-t-4 border-red-500/20 top-1/2 -translate-y-1/2 rounded-[100%]"></div>
        <div className="absolute w-[200%] h-[300px] border-t-4 border-purple-500/20 top-1/2 -translate-y-1/3 rounded-[100%]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Featured Events
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of motorsports and technology through our signature events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Racing Simulator */}
          <div className="event-pres1 group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 ">
            <div className="absolute inset-0 ">
              <img
                src="https://images.unsplash.com/photo-1547149600-a6cdf8fce60c?auto=format&fit=crop&w=800&q=80"
                alt="Racing Simulator"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative p-6 flex flex-col h-full min-h-[400px]">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Racing Simulator</h3>
              <p className="text-gray-400 mb-6">Experience professional racing simulators with force feedback and real-time telemetry.</p>
            </div>
          </div>

          {/* Robotics Race */}
          <div className=" event-pres2 group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
                alt="Robotics Race"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative p-6 flex flex-col h-full min-h-[400px]">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Robotics Race</h3>
              <p className="text-gray-400 mb-6">Watch autonomous robots compete on our custom-designed racing track.</p>
            </div>
          </div>

          {/* Tech Exhibition */}
          <div className="event-pres3 group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 ">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Tech Exhibition"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative p-6 flex flex-col h-full min-h-[400px]">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Tech Exhibition</h3>
              <p className="text-gray-400 mb-6">Explore cutting-edge automotive technology and meet industry innovators.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/events')}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300"
          >
            View All Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPreview;
