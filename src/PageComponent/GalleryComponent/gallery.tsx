import React, { useState } from 'react';

const images = [
  { src: 'Images/Home/Gallery/gallerpizza.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryapple.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryavocado.png', category: 'food' },
  { src: 'Images/Home/Gallery/gallerybulb.png', category: 'other' },
  { src: 'Images/Home/Gallery/gallerycroissant.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryfairy.png', category: 'other' },
  { src: 'Images/Home/Gallery/gallerypear.png', category: 'food' },
  { src: 'Images/Home/Gallery/gallerypenguin.png', category: 'animal' },
  { src: 'Images/Home/Gallery/galleryrose.png', category: 'plant' },
  { src: 'Images/Home/Gallery/gallerytomato.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryvinegar.png', category: 'drink' },
  { src: 'Images/Home/Gallery/gallerywalkers.png', category: 'food' },
  { src: 'Images/Home/Gallery/heroimgwatermelon.png', category: 'food' },
];

const categories = ['food', 'drink', 'other', 'animal', 'plant', 'clear'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category:string) => {
    setSelectedCategory(category === 'clear' ? 'all' : category);
  };

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
      <p className="text-center mb-4">Select a category to filter the images:</p>
      <div className="flex justify-center mb-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`mx-2 px-4 py-2 rounded transition-colors duration-200 ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } ${category === 'clear' ? 'hover:bg-red-500' : 'hover:bg-blue-300'}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === 'clear' ? 'Clear Filters ✕' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {selectedCategory === 'all' ? (
        categories.filter(category => category !== 'clear').map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-3xl font-semibold my-4 text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 py-4 gap-4 mx-auto px-6 max-w-7xl lg:px-8">
              {images.filter(image => image.category === category).map((image, index) => (
                <div key={index} className="relative w-full h-48 md:h-64 lg:h-80">
                  <img
                    className="absolute inset-0 w-full h-full object-contain rounded-lg border-2 bg-white border-black"
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3 className="text-3xl font-semibold my-4 text-center">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 py-4 gap-4 mx-auto px-6 max-w-7xl lg:px-8">
            {filteredImages.map((image, index) => (
              <div key={index} className="relative w-full h-48 md:h-64 lg:h-80">
                <img
                  className="absolute inset-0 w-full h-full object-contain rounded-lg border-2 bg-white border-black"
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
