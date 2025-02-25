import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

const Registration = () => {
  return (
    <div id="registration" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Join the Race
            </span>
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Users className="w-8 h-8 text-red-500" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">1,500+</p>
                <p className="text-gray-400">Participants Registered</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-red-500 to-purple-600"></div>
              </div>
              <p className="text-gray-400">Only 500 spots remaining!</p>
            </div>

            <a
              href="https://forms.google.com/synergia-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 group"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Early Bird", price: "₹999", deadline: "Until Sept 30" },
              { title: "Regular", price: "₹1499", deadline: "Until Oct 15" },
              { title: "Late", price: "₹1999", deadline: "Until Oct 30" },
            ].map((tier, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
                <p className="text-2xl font-bold text-red-500 mb-1">{tier.price}</p>
                <p className="text-sm text-gray-400">{tier.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;