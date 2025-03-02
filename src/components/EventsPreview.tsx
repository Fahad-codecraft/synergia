import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EventsPreview = () => {

  gsap.registerPlugin(ScrollTrigger);



  useEffect(() => {
    gsap.fromTo(".event-pres1",
      {
        x: -100,
        rotate: -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
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
        rotate: 30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
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

    gsap.to(".featuredText", {
      x: 0,
      duration: 0.5,
      ease: "power1.Out",
      scrollTrigger: {
        trigger: ".texts",
        start: "top 50%",
        toggleActions: "play reverse play reverse",
      }
    });

  }, []);


  return (
    <div id="events" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Racing track background */}
      <div className="absolute inset-0">
        <div className="absolute w-[200%] h-[200px] border-t-4 border-red-500/20 top-1/2 -translate-y-1/2 rounded-[100%]"></div>
        <div className="absolute w-[200%] h-[300px] border-t-4 border-purple-500/20 top-1/2 -translate-y-1/3 rounded-[100%]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 texts">
          <h2 className="featuredText text-5xl md:text-7xl lg:text-8xl font-[AlphaCorsa] font-bold mb-6 -translate-x-44">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Featured {" "}
            </span>
          </h2>
          <h2 className='featuredText text-5xl md:text-7xl lg:text-8xl font-[AlphaCorsa] font-bold mb-6 translate-x-44'>
            <span className="text-transparent  font-[AlphaCorsa] bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Events
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
                src="/posters/Bid to Build.webp"
                alt="Racing Simulator"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-70 transition-opacity duration-500 -translate-y-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative p-6 flex flex-col h-full w-full min-w-[397px] min-h-[561px]">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <img src='/icons/hammer.svg' className='w-6 h-6' />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Bid To Build</h3>
              <p className="text-gray-400 mb-6">Bid. Build. Bedazzle! Unbox creativity, outsmart the odds, and craft your way to victory!</p>
            </div>
          </div>

          {/* Robotics Race */}
          <div className=" event-pres2 group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0">
              <img
                src="/posters/Squid game.webp"
                alt="Robotics Race"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative p-6 flex flex-col h-full min-h-[400px]">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <img src="/icons/dices-purple.svg" className='w-6 h-6'/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Squid Games</h3>
              <p className="text-gray-400 mb-6">Survive the Games, Claim the Prize—Only the Sharpest Make It Out Alive!</p>
            </div>
          </div>

          {/* Tech Exhibition */}
          <div className="event-pres3 group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 ">
              <img
                src="/posters/diplomat.webp"
                alt="Diplomat"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative p-6 flex flex-col h-full min-h-[400px]">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
              <img src="/icons/swords.svg" className='w-6 h-6'/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Diplomat</h3>
              <p className="text-gray-400 mb-6">Master diplomacy, navigate conflicts, and lead the world!</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href='/events'
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300"
          >
            View All Events
            <img src="/icons/arrow-right.svg" className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventsPreview;
