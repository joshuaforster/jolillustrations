import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Would definitely recommend and buy again!",
    rating: 5,
    text: "I have bought a few prints from Holly and Josh, they have all been amazing! Perfectly presented and they go great with our decor. Would definitely recommend and buy again!",
    author: "Laura Parfit",
    image: "Images/Home/Testimonials/laurasloth.webp"
  },
  {
    quote: "The tomato can image looks great in our kitchen",
    rating: 5,
    text: "Really lovely and unique pieces of artwork, the tomato can image looks great in our kitchen. Love all the designs",
    author: "Karen Banks Dunell",
    image: "Images/Home/Testimonials/Karen.webp"
  },
  {
    quote: "I am thrilled with the t-shirts Holly and Josh made for my grandchildren.",
    rating: 5,
    text: "I am thrilled with the t-shirts Holly and Josh made for my grandchildren. Not only are they fun to wear and they love them, but they are very good quality. Thank you! We look forward to seeing more designs in due course, and wish you much success with this project.",
    author: "Carolyn Hamerton",
    image: "Images/Home/Testimonials/Shirts.webp"
  },
  {
    quote: "Their work together is absolutely amazing",
    rating: 5,
    text: "I can’t recommend Josh and Holly enough! Their work together is absolutely amazing and looks great around the house - highly recommend!",
    author: "Joel Saunders",
    image: "Images/Home/Testimonials/joel.jpeg"
  }
];

export default function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { quote, rating, text, author, image } = testimonials[currentTestimonialIndex];

  return (
    <section className="isolate overflow-hidden px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
        <div className="relative max-h-96 overflow-hidden">
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
              <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Hear from our happy customers</h2>
                <div className="flex flex-col mb-4">
                  <h4 className="text-lg font-bold">{quote}</h4>
                  <p className="text-yellow-500 text-lg">{'★'.repeat(rating)}</p>
                </div>
                <p>{text}</p>
              </blockquote>
              <figcaption className="mt-6 text-base lg:col-start-1 lg:row-start-3">
                <div className="font-semibold text-gray-900">{author}</div>
              </figcaption>
            </div>
            <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
              <img
                className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                src={image}
                alt={author}
              />
            </div>
          </figure>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xl bg-white p-2 rounded-full shadow-md"
            onClick={prevTestimonial}
          >
            &#8249;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl bg-white p-2 rounded-full shadow-md"
            onClick={nextTestimonial}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

