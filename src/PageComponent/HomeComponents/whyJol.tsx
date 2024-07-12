import React from 'react';

export default function WhyJol() {
  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What Makes Us Different</h2>
          <p className="mb-4">
            Our process blends traditional and digital techniques. Holly starts with a sketch on paper, which Josh then digitises on his iPad. The final touch involves adding watercolours, bringing depth and life to the image.
          </p>
          <p className="mb-4">
            The completed illustration can be adapted for various uses, including logos, T-shirt designs, vector graphics, and wall art. Our unique approach ensures each piece is distinctive and versatile.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full h-full object-cover rounded-lg" src="Images/Home/WhyJol/ghanaBefore.png" alt="Illustration process 1" />
          <img className="w-full h-full object-cover rounded-lg" src="Images/Home/WhyJol/ghanaAfter.png" alt="Illustration process 2" />
        </div>
      </div>
    </section>
  );
}
