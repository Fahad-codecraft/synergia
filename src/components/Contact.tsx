import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            Get in Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@synergia.tech"
                  className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  info@synergia.tech
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  Tech City, Innovation Hub, India
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "https://instagram.com/synergia" },
                  { icon: Twitter, href: "https://twitter.com/synergia" },
                  { icon: Linkedin, href: "https://linkedin.com/company/synergia" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;