import React from 'react';

const images = [
  'Images/Home/Gallery/gallerpizza.png',
  'Images/Home/Gallery/galleryapple.png',
  'Images/Home/Gallery/galleryavocado.png',
  'Images/Home/Gallery/gallerybulb.png',
  'Images/Home/Gallery/gallerycroissant.png',
  'Images/Home/Gallery/galleryfairy.png',
  'Images/Home/Gallery/gallerypear.png',
  'Images/Home/Gallery/gallerypenguin.png',
  'Images/Home/Gallery/galleryrose.png',
  'Images/Home/Gallery/gallerytomato.png',
  'Images/Home/Gallery/galleryvinegar.png',
  'Images/Home/Gallery/gallerywalkers.png',
  'Images/Home/Gallery/heroimgwatermelon.png'
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-4 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-48 md:h-64 lg:h-80">
          <img className="absolute inset-0 w-full h-full object-contain rounded-lg border-2 bg-white border-black" src={src} alt={`Gallery  ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
