import React, { useState } from 'react';

const images = [
  { src: 'Images/Home/Gallery/gallerpizza.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryapple.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryavocado.png', category: 'food' },
  { src: 'Images/Home/Gallery/gallerybulb.png', category: 'other' },
  { src: 'Images/Home/Gallery/gallerycroissant.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryfairy.png', category: 'other' },
  { src: 'Images/Home/Gallery/gallerypear.png', category: 'food' },
  { src: 'Images/Home/Gallery/penguin.png', category: 'animal' },
  { src: 'Images/Home/Gallery/galleryrose.png', category: 'plant' },
  { src: 'Images/Home/Gallery/gallerytomato.png', category: 'food' },
  { src: 'Images/Home/Gallery/galleryvinegar.png', category: 'drink' },
  { src: 'Images/Home/Gallery/gallerywalkers.png', category: 'food' },
  { src: 'Images/Home/Gallery/heroimgwatermelon.png', category: 'food' },
  { src: 'Images/Home/Gallery/coke.png', category: 'drink' },
  { src: 'Images/Home/Gallery/baileys.png', category: 'drink' },
  { src: 'Images/Home/Gallery/holly.png', category: 'other' },
  { src: 'Images/Home/Gallery/xmaspudding.png', category: 'food' },
  { src: 'Images/Home/Gallery/blueberries.png', category: 'food' },
  { src: 'Images/Home/Gallery/pineapple.png', category: 'food' },
  { src: 'Images/Home/Gallery/chocolate.png', category: 'food' },
  { src: 'Images/Home/Gallery/crab.png', category: 'animal' },
  { src: 'Images/Home/Gallery/mussels.png', category: 'food' },
  { src: 'Images/Home/Gallery/rigatoni.png', category: 'food' },
  { src: 'Images/Home/Gallery/lemon.png', category: 'food' },
  { src: 'Images/Home/Gallery/banana.png', category: 'food' },
  { src: 'Images/Home/Gallery/aubergine.png', category: 'food' },
  { src: 'Images/Home/Gallery/celery.png', category: 'food' },
  { src: 'Images/Home/Gallery/redgrapes.png', category: 'food' },
  { src: 'Images/Home/Gallery/oranges.png', category: 'food' },
  { src: 'Images/Home/Gallery/cone.png', category: 'food' },
  { src: 'Images/Home/Gallery/coffeebeans.png', category: 'other' },
  { src: 'Images/Home/Gallery/pen.png', category: 'other' },
  { src: 'Images/Home/Gallery/cactus.png', category: 'other' },
  { src: 'Images/Home/Gallery/birthdaycake.png', category: 'food' },
  { src: 'Images/Home/Gallery/ladybird.png', category: 'animal' },
  { src: 'Images/Home/Gallery/burger.png', category: 'food' },
  { src: 'Images/Home/Gallery/apple.png', category: 'food' },
  { src: 'Images/Home/Gallery/croissant.png', category: 'food' },
  { src: 'Images/Home/Gallery/seahorse.png', category: 'animal' },
  { src: 'Images/Home/Gallery/jellyfish.png', category: 'animal' },
  { src: 'Images/Home/Gallery/bee.png', category: 'animal' },
  { src: 'Images/Home/Gallery/barrel.png', category: 'other' },
  { src: 'Images/Home/Gallery/fountainpen.png', category: 'other' },
  { src: 'Images/Home/Gallery/stylus.png', category: 'other' },
  { src: 'Images/Home/Gallery/goat.png', category: 'animal' },
  { src: 'Images/Home/Gallery/ballet.png', category: 'other' },
  { src: 'Images/Home/Gallery/piglet.png', category: 'other' },
  { src: 'Images/Home/Gallery/sunflower.png', category: 'plant' },
  { src: 'Images/Home/Gallery/swede.png', category: 'food' },
  { src: 'Images/Home/Gallery/ghanalady.png', category: 'other' },
  { src: 'Images/Home/Gallery/bubbly.png', category: 'drink' },
  { src: 'Images/Home/Gallery/dolphin.png', category: 'animal' },
  { src: 'Images/Home/Gallery/whale.png', category: 'animal' },
  { src: 'Images/Home/Gallery/rabbit.png', category: 'animal' },
  { src: 'Images/Home/Gallery/germany.png', category: 'flags' },
  { src: 'Images/Home/Gallery/ghana.png', category: 'flags' },
  { src: 'Images/Home/Gallery/italy.png', category: 'flags' },
  { src: 'Images/Home/Gallery/japan.png', category: 'flags' },
  { src: 'Images/Home/Gallery/mcdonalds.png', category: 'food' },
  { src: 'Images/Home/Gallery/cigarette.png', category: 'other' },
  { src: 'Images/Home/Gallery/aromat.png', category: 'food' },
  { src: 'Images/Home/Gallery/cheese.png', category: 'food' },
  { src: 'Images/Home/Gallery/fusili.png', category: 'food' },
  { src: 'Images/Home/Gallery/mango.png', category: 'food' },
  { src: 'Images/Home/Gallery/gordons.png', category: 'food' },
  { src: 'Images/Home/Gallery/chilli.png', category: 'food' },
  { src: 'Images/Home/Gallery/sheep.png', category: 'animal' },
  { src: 'Images/Home/Gallery/cocoa.png', category: 'other' },
  { src: 'Images/Home/Gallery/guiness.png', category: 'drink' },
  { src: 'Images/Home/Gallery/hippo.png', category: 'animal' },
  { src: 'Images/Home/Gallery/palmtree.png', category: 'other' },
  { src: 'Images/Home/Gallery/crocodile.png', category: 'animal' },
  { src: 'Images/Home/Gallery/chicken.png', category: 'animal' },
  { src: 'Images/Home/Gallery/monkey.png', category: 'animal' },
  { src: 'Images/Home/Gallery/drums.png', category: 'other' },
  { src: 'Images/Home/Gallery/gazelle.png', category: 'animal' },
  { src: 'Images/Home/Gallery/snake.png', category: 'animal' },
  { src: 'Images/Home/Gallery/ghanaman.png', category: 'animal' },
  { src: 'Images/Home/Gallery/elephant.png', category: 'animal' },
  { src: 'Images/Home/Gallery/lion.png', category: 'animal' },
  { src: 'Images/Home/Gallery/hut.png', category: 'other' },
  { src: 'Images/Home/Gallery/plane.png', category: 'other' },
  { src: 'Images/Home/Gallery/mosque.png', category: 'other' },
  { src: 'Images/Home/Gallery/church.png', category: 'other' },
  { src: 'Images/Home/Gallery/celebrate.png', category: 'drinks' },
  // { src: 'Images/Home/Gallery/dodo.png', category: 'animal' },
];

const categories = ['food', 'drink', 'other', 'animal', 'plant', 'flags', 'clear'];

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
