import React, { useState } from 'react';
import EventPopup from './EventPopup';
import ReactMarkdown from 'react-markdown';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      icon: '/icons/hammer.svg',
      title: "Bid To Build",
      description: `Compete in a creative test of skill and strategy across three exciting rounds:

🔹 **Round 1**: Aptitude Test - Answer MCQs (+1 for correct, -1 for incorrect).

🔹 **Round 2** : Bidding for Boxes - Use virtual funds to bid for mystery component boxes. No exceeding funds or trading allowed.

🔹 **Round 3** : Show Your Creativity - Build a decorative item using acquired components. Judged on creativity, functionality, aesthetics, and effective use of materials.

🏆Prize Pool:- Rs. 8000


🚨 Disqualification for: Rule violations, cheating, unsportsmanlike conduct, or negligence.`,
      date: "March 7, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Mechanical Classroom",
      capacity: "50 participants per session",
      link: "https://linktr.ee/BidToBuild",
      image: "/posters/Bid to Build.webp"
    },
    {
      icon: '/icons/dices.svg',
      title: "Squid Games",
      description: `Compete in a thrilling survival-style event with three intense rounds:

🔹 Mingle - Form groups within 30 seconds and find the right box to survive.

🔹 Red Light, Green Light - Move on "Green Light," freeze on "Red Light," or face elimination.

🔹 Dalgona Challenge - Carefully carve out a shape from dalgona candy without breaking it.

📅 Date: 8th March 2025
📍 Venue: PCCOE Lawn
🏆 Prize Pool: ₹5000`,
      date: "March 8, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "PCCoE Lawn",
      capacity: "200 visitors",
      link: "https://linktr.ee/SynergiaSquidGame",
      image: "/posters/Squid game.webp"
    },
    {
      icon: '/icons/clock11.svg',
      title: "Minute to Win",
      description: `**🏆 Minute to Win It The Ultimate 60-Second Challenge! ⏳**  

Brace yourself for a high-energy competition where skill, speed, and strategy collide.

In **Minute to Win It**, participants will take on thrilling 60-second challenges, pushing their abilities to the limit.  

With three intense rounds, only the best will make it to the *Ultimate Showdown* and claim victory. Do you have what it takes to **win it in a minute?** 💪  

🎁 **PRIZE POOL: 3K** - Bring your A-game and take home the glory! 🎉`,

      date: "March 7, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Classroom",
      capacity: "150 spectators",
      link: "https://linktr.ee/SYNERGIAMINUTETOWINIT",
      image: "/posters/Minute to win.webp"
    },
    {
      icon: '/icons/rocket.svg',
      title: "Start it Up",
      description: `Start It Up - Business Strategy Competition 🚀

Start It Up is an exciting business strategy event where teams tackle real-world challenges and develop innovative solutions. Participants will navigate through three competitive rounds: crafting a business proposal, presenting to a panel, and building a Minimum Viable Product (MVP) with a provided budget. The best strategists will claim victory and exciting prizes! Are you ready to innovate and dominate? 💡🔥
`,
      date: "March 7, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Classroom",
      capacity: "75 participants",
      link: "https://linktr.ee/SYNERGIASTARTITUP",
      image: "/posters/start it up.webp"
    },
    {
      icon: "/icons/swords.svg",
      title: "Diplomat",
      description: `Diplomat is a competitive event where students step into the role of diplomats, tackling global issues through knowledge, debate, and negotiation.

Round 1: General Knowledge & Current Affairs Quiz - Tests participants' awareness of international relations, treaties, and global events.

Round 2: Diplomatic Debate & Conflict Resolution - Teams represent different countries, negotiate alliances, and resolve geopolitical conflicts through diplomacy.


The event fosters critical thinking, negotiation skills, and strategic decision-making, preparing participants for real-world global leadership.`,
      date: "March 7, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Drawing Hall Mechanical",
      capacity: "75 participants",
      link: "https://linktr.ee/SYNERGIADiplomat",
      image: "/posters/diplomat.webp"
    }

  ];

  return (
    <div id="events" className="min-h-screen bg-black py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-16">
          <span className="text-transparent font-[Alphacorsa] bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            Events & Expos
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="group relative w-full bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-red-500 transition-all duration-300 overflow-hidden"
              style={{ aspectRatio: '1/1.2' }}
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
              <div className="relative h-full p-4 sm:p-6 lg:p-8 flex flex-col">
                {/* Top Section */}
                <div className="flex items-center justify-between mb-2">
                  <div className="w-16 h-16 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                    <img src={event.icon} className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 bg-black/50 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                    {event.date}
                  </span>
                </div>

                {/* Middle Section - Title */}
                <div className="mt-8 sm:mt-12 mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                    {event.title}
                  </h3>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto">
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8">
                    <ReactMarkdown>
                      {event.description.split('.')[0] + '.'}
                    </ReactMarkdown>
                  </p>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-red-500/10 border border-red-500/20 text-red-500 py-3 sm:py-4 rounded-lg font-medium hover:bg-red-500/20 transition-all duration-300 group-hover:border-red-500/40 text-sm sm:text-base"
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
