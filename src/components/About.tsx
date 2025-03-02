import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    gsap.utils.toArray('.card-left').forEach((card) => {
      gsap.fromTo(
        card as gsap.TweenTarget,
        {
          x: -400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 70%',
            end: 'top 10%',
            scrub: true,
          },
        }
      );
    });

    gsap.utils.toArray('.card-right').forEach((card) => {
      gsap.fromTo(
        card as gsap.TweenTarget,
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
            trigger: card as Element,
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
    });

    gsap.to(".head2", {
      x: 0,
      duration: 0.5,
      ease: "power1.Out",
      scrollTrigger: {
        trigger: ".head",
        start: "top 50%",
        toggleActions: "play reverse play reverse",
      }
    });

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
    });
  }, []);

  return (
    <div id="about" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Racing track background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[200%] h-[200px] border-t-4 border-red-500 top-1/2 -translate-y-1/2 rounded-[100%]"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* <div className='flex flex-col mx-4 md:mx-12 lg:mx-24 head'>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center lg:text-left lg:flex lg:flex-start ml-2 -translate-x-10 head1">
            <span className="font-[AlphaCorsa] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              About
            </span>
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center lg:text-left mb-8 lg:mb-16 lg:flex lg:flex-start ml-2 translate-x-10 head2">
            <span className="font-[AlphaCorsa] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Synergia
            </span>
          </h2>
        </div> */}

        <div className="flex flex-col gap-8 lg:gap-12 font-[AlphaCorsa] items-center">
          {/* <div className="space-y-4 lg:space-y-6 max-w-5xl font-[formula1] para translate-y-8 opacity-0 px-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Synergia is where the thunderous roar of motorsports meets cutting-edge technology.
              Born from the passion for speed and innovation, we bring together the brightest minds
              and the fastest machines.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Experience the future of racing technology through immersive exhibitions,
              hands-on workshops, and thrilling competitions that push the boundaries of
              what's possible.
            </p>
          </div> */}

          <div className="cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 px-4 w-full max-w-7xl">
            <div className="card-left transform md:-translate-y-8">
              <div className="bg-gradient-to-br w-full h-[200px] md:h-[250px] lg:h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">4</h3>
                <p className="text-lg md:text-xl text-white">Events</p>
              </div>
            </div>

            <div className="card-right transform md:translate-y-16">
              <div className="bg-gradient-to-br w-full h-[200px] md:h-[250px] lg:h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">2</h3>
                <p className="text-lg md:text-xl text-white">Expos</p>
              </div>
            </div>

            <div className="card-left transform md:-translate-y-8">
              <div className="bg-gradient-to-br w-full h-[200px] md:h-[250px] lg:h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">2</h3>
                <p className="text-lg md:text-xl text-white">Days</p>
              </div>
            </div>

            <div className="card-right transform md:translate-y-16">
              <div className="bg-gradient-to-br w-full h-[200px] md:h-[250px] lg:h-[300px] from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">50000+</h3>
                <p className="text-lg md:text-xl text-white">Prize Pool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;