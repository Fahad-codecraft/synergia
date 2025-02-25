import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      title: "Racing Exhibition 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=800&q=80",
      title: "Tech Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=800&q=80",
      title: "Pit Stop Challenge"
    },
    {
      url: "https://images.unsplash.com/photo-1517846693594-1567da4b3d7e?auto=format&fit=crop&w=800&q=80",
      title: "Racing Simulator Zone"
    },
    {
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80",
      title: "Engineering Exhibition"
    },
    {
      url: "https://images.unsplash.com/photo-1547744037-c14253afee0d?auto=format&fit=crop&w=800&q=80",
      title: "Virtual Reality Experience"
    }
  ];

  return (
    <div id="gallery" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            Gallery
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;