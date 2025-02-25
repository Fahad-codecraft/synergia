// import { Timer, Flag, Trophy, Zap } from 'lucide-react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const About = () => {

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.utils.toArray('.card-left').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: -400,
          rotate: -30,
          opacity: 0,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
            end: 'top 10%',
            scrub: true,
          },
        }
      );
    });

    gsap.utils.toArray('.card-right').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: 400,
          rotate: 30,
          opacity: 0,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
            end: 'top 10%',
            scrub: true,
          },
        }
      );
    });


    gsap.to(".head1", {
      x: 0,
      duration: 0.5,
      ease: "power1.Out",
      scrollTrigger: {
        trigger: ".head",
        start: "top 50%",
        toggleActions: "play reverse play reverse",
      }
    })
    gsap.to(".head2", {
      x: 0,
      duration: 0.5,
      ease: "power1.Out",
      scrollTrigger: {
        trigger: ".head",
        start: "top 50%",
        toggleActions: "play reverse play reverse",
      }
    })

    gsap.to(".para", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.Out",
      scrollTrigger: {
        trigger: ".para",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      }
    })

  }, []);


  return (
    <div id="about" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Racing track background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[200%] h-[200px] border-t-4 border-red-500 top-1/2 -translate-y-1/2 rounded-[100%]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className='flex flex-col mx-24 head'>
          <h2 className="text-9xl font-bold text-center flex flex-start ml-2 -translate-x-10 head1">
            <span className="font-[DirtyLine36] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              About
            </span>
          </h2>
          <h2 className="text-9xl font-bold text-center mb-16 flex flex-start ml-2 translate-x-10 head2">
            <span className="font-[DirtyLine36] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Synergia
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-6 max-w-5xl font-[DirtyLine36] para translate-y-8 opacity-0">
            <p className="text-gray-300 text-lg leading-relaxed">
              Synergia is where the thunderous roar of motorsports meets cutting-edge technology.
              Born from the passion for speed and innovation, we bring together the brightest minds
              and the fastest machines.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience the future of racing technology through immersive exhibitions,
              hands-on workshops, and thrilling competitions that push the boundaries of
              what's possible.
            </p>
          </div>

          <div className="cards grid grid-cols-2 gap-4">
            <div className="card-left transform -translate-y-8">
              <div className="bg-gradient-to-br w-[600px] h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-5xl font-bold text-red-500 mb-2">6+</h3>
                <p className="text-xl text-white">Events</p>
              </div>
            </div>

            <div className="card-right transform translate-y-16">
              <div className="bg-gradient-to-br w-[600px] h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-5xl font-bold text-red-500 mb-2">2</h3>
                <p className="text-xl text-white">Expos</p>
              </div>
            </div>

            {/* Second row */}
            <div className="card-left transform -translate-y-8">
              <div className="bg-gradient-to-br w-[600px] h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-5xl font-bold text-red-500 mb-2">10000+</h3>
                  <p className="text-xl text-white">Prize pool</p>
              </div>
            </div>
            <div className="card-right transform translate-y-16">
              <div className="bg-gradient-to-br w-[600px] h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-5xl font-bold text-red-500 mb-2">2+</h3>
                <p className="text-xl text-white">Expos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;