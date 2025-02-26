import React from 'react';

const Sponsors = () => {
  const sponsors = [
    {
      name: "TechRace Industries",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80",
      type: "Title Sponsor"
    },
    {
      name: "SpeedTech Solutions",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=200&h=100&q=80",
      type: "Gold Sponsor"
    },
    {
      name: "RacingAI Labs",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=200&h=100&q=80",
      type: "Gold Sponsor"
    },
    {
      name: "MotorInnovate",
      logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=200&h=100&q=80",
      type: "Silver Sponsor"
    },
    {
      name: "VelocityVR",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=200&h=100&q=80",
      type: "Silver Sponsor"
    },
    {
      name: "AutoTech Dynamics",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&h=100&q=80",
      type: "Bronze Sponsor"
    }
  ];

  return (
    <div id="sponsors" className="min-h-screen bg-black py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            Our Sponsors
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center p-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">{sponsor.name}</h3>
              <p className="text-xs sm:text-sm text-red-500">{sponsor.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;