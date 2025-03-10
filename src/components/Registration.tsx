import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
const Registration = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    gsap.fromTo(".car-event", {
      x: -500,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".car-event",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    })


    gsap.fromTo(".tech-event", {
      x: 500,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".car-event",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    })

  }, [])

  gsap.to(".head1", {
    y: 0,
    duration: 0.5,
    ease: "power1.Out",
    scrollTrigger: {
      trigger: ".texts",
      start: "top 50%",
      toggleActions: "play reverse play reverse",
    }
  });



  return (
    <div id="registration" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto texts">
          <div className='text-center'>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-[AlphaCorsa]  font-bold mb-6">
              <span className="head1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                Experience{" "}
              </span>
              <span className="head2 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-purple-700">
                True Expos
              </span>
            </h2>
            <p className="text-gray-400 text-center text-xl mb-16">Register for any event and get free access to both expos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Car Event Card */}
            <div className="car-event bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <img src="/icons/car.svg" className='w-8 h-8' />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Auto Expo</h3>
              <ul className="space-y-3 text-gray-400 mb-8">
                <li>• Supercars Showcase</li>
                <li>• Tuned Cars & Custom Builds</li>
                <li>• Performance & Technology</li>
                <li>• The Art of Tuning</li>
              </ul>
            </div>

            {/* Tech Event Card */}
            <div className="tech-event bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <img src="/icons/cpu.svg" className='w-8 h-8' />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tech Expo</h3>
              <ul className="space-y-3 text-gray-400 mb-8">
                <li>• Robotics competition</li>
                <li>• AI & ML workshops</li>
                <li>• Innovations</li>
                <li>• Tech startup showcase</li>
              </ul>
            </div>
          </div>

          {/* Free Pass Highlight */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                <img src="/icons/ticket.svg" className='w-8 h-8' />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Free Expo Access</h3>
                <p className="text-gray-400">Register for any event and get complimentary passes to both expos</p>
              </div>
            </div>

            <a
              href="/events"
              className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 group"
            >
              Register for Events
              <img src="/icons/arrow-right.svg" className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
          </div>

          {/* Event Highlights */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-2xl font-bold text-red-500 mb-2">2 Days</p>
              <p className="text-gray-400">Of Fun</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-purple-500 mb-2">5</p>
              <p className="text-gray-400">Events</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-red-500 mb-2">2</p>
              <p className="text-gray-400">Major Expos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;