import React from 'react';

const images = [
  '/Images/About/AboutGallery/ballerina 1.png',
  '/Images/About/AboutGallery/boatlandscape 1.png',
  '/Images/About/AboutGallery/image 121.png',
];

export default function AboutHead() {
  return (
    <div className="grid pt-4 grid-cols-3 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative h-60 w-full">
          <img className="absolute inset-0 w-full h-full object-cover rounded-lg border-2 border-black" src={src} alt={`Gallery image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
