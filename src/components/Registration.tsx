import { Car, Cpu, Ticket, ArrowRight } from 'lucide-react';

const Registration = () => {
  return (
    <div id="registration" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Experience Innovation
            </span>
          </h2>
          <p className="text-gray-400 text-center text-xl mb-16">Register for any event and get free access to both expos</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Car Event Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Car className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Racing Events</h3>
              <ul className="space-y-3 text-gray-400 mb-8">
                <li>• Racing simulator championship</li>
                <li>• Pit stop challenge</li>
                <li>• Performance workshops</li>
                <li>• Professional racing talks</li>
              </ul>
              <button className="w-full bg-red-500/10 border border-red-500/20 text-red-500 py-4 rounded-xl font-medium hover:bg-red-500/20 transition-all duration-300 group-hover:border-red-500/40">
                Register Now
              </button>
            </div>

            {/* Tech Event Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tech Events</h3>
              <ul className="space-y-3 text-gray-400 mb-8">
                <li>• Robotics competition</li>
                <li>• AI & ML workshops</li>
                <li>• Innovation hackathon</li>
                <li>• Tech startup showcase</li>
              </ul>
              <button className="w-full bg-purple-500/10 border border-purple-500/20 text-purple-500 py-4 rounded-xl font-medium hover:bg-purple-500/20 transition-all duration-300 group-hover:border-purple-500/40">
                Register Now
              </button>
            </div>
          </div>

          {/* Free Pass Highlight */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Free Expo Access</h3>
                <p className="text-gray-400">Register for any event and get complimentary passes to both expos</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 group"
            >
              Register for Events
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Event Highlights */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-2xl font-bold text-red-500 mb-2">2 Days</p>
              <p className="text-gray-400">Of Innovation</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-purple-500 mb-2">8+</p>
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