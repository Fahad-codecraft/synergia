import React, { useState } from 'react';
import { Car, Cpu, Bot, Rocket } from 'lucide-react';
import EventPopup from './EventPopup';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      icon: Car,
      title: "Racing Simulator",
      description: "Experience professional racing simulators with force feedback and real-time telemetry data. Get behind the wheel of Formula 1, GT, and Rally cars. Our state-of-the-art simulators feature motion platforms, professional steering wheels, and pedal sets that provide an incredibly realistic racing experience. Perfect for both beginners and experienced racers.",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Main Exhibition Hall",
      capacity: "50 participants per session",
      image: "https://images.unsplash.com/photo-1547149600-a6cdf8fce60c?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Cpu,
      title: "Tech Exhibition",
      description: "Explore cutting-edge automotive technology, from electric powertrains to autonomous driving systems. Meet industry leaders and innovators. Get hands-on experience with the latest automotive tech, including AI-powered driver assistance systems, next-generation battery technology, and advanced aerodynamic designs. Special presentations from leading automotive engineers throughout the day.",
      date: "March 16, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      capacity: "200 visitors",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Bot,
      title: "Robotics Race",
      description: "Watch autonomous robots compete on our custom-designed track. Witness the future of racing where AI meets speed. Teams from top universities and tech companies showcase their latest autonomous racing robots. Experience the thrill of watching AI-powered vehicles navigate complex racing circuits at high speeds. Live demonstrations and technical workshops available.",
      date: "March 17, 2024",
      time: "11:00 AM - 4:00 PM",
      location: "Robotics Arena",
      capacity: "150 spectators",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Rocket,
      title: "Speed Engineering",
      description: "Deep dive into aerodynamics and vehicle optimization. Learn from top engineers about the science of speed. This workshop covers advanced topics in vehicle dynamics, computational fluid dynamics, and performance optimization. Participants will get to use professional simulation software and learn from industry experts. Includes hands-on activities and real-world case studies.",
      date: "March 18, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Engineering Workshop",
      capacity: "75 participants",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div id="events" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            Events & Expos
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative w-full bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 overflow-hidden"
              style={{ aspectRatio: '1/1.4142' }} // A4 aspect ratio
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col">
                {/* Top Section */}
                <div className="flex items-center justify-between mb-2">
                  <event.icon className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-400 bg-black/50 px-4 py-2 rounded-full">
                    {event.date}
                  </span>
                </div>

                {/* Middle Section - Title */}
                <div className="mt-12 mb-6">
                  <h3 className="text-4xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                    {event.title}
                  </h3>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto">
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {event.description.split('.')[0] + '.'}
                  </p>
                  
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-red-500/10 border border-red-500/20 text-red-500 py-4 rounded-lg font-medium hover:bg-red-500/20 transition-all duration-300 group-hover:border-red-500/40 text-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Popup */}
      {selectedEvent && (
        <EventPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;