import React, { useState, useEffect } from 'react';

const images = [
  '/Images/Home/Hero/avocado.png',
  '/Images/Home/Hero/bee.png',
  '/Images/Home/Hero/blueberries.png',
  '/Images/Home/Hero/oranges.png',
  '/Images/Home/Hero/personalghana.png',
  '/Images/Home/Hero/rabbit.png',
  '/Images/Home/Hero/tomato.png',
  '/Images/Home/Hero/watermelon.png'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 0); // Duration of fade-out
    }, 4000); // Total duration including visible time and fade-in

    return () => clearInterval(interval);
  }, []);

  return (
    <section >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-left">
            Collaborative Art with a Difference: An Artist With Ataxia
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white text-center md:text-left">
            Josh and Holly's hand drawn illustrations are available for purchase or personalised commissions. Contact us for more information and pricing details.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="google.com" className="btn">View Gallery</a>
            <a href="google.com" className="btn ml-4">Learn About Holly</a>
          </div>
        </div>
        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <div className="relative w-full md:w-auto border-2 border-black" style={{ maxHeight: '75vh' }}>
            <img
              className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
              src={images[currentImageIndex]}
              alt="abstract art"
              style={{ maxHeight: '75vh', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
