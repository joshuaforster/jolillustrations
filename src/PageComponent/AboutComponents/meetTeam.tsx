import React, { useEffect, useState, useRef } from 'react';

const people = [
  {
    name: 'Joshua Forster',
    role: 'Co-Founder & Project Manager',
    imageUrl: 'Images/About/Team/aboutJosh.png',
    bio: `Josh is a Master's student in Communication Design at Norwich University of the Arts. His areas of interest are Graphic Design, Web Design, Logo Design, and coding. The idea of illustrating came about when his tutor proposed adding some artwork to his food ordering app. This led to his collaboration with Holly. His journey started during his Nutrition degree, where he began a blog. This sparked an interest in web design and pushed him into the worlds of graphic design and coding. Today, he uses these skills to create illustrations alongside Holly.`,
  },
  {
    name: 'Jason Wright',
    role: 'Co-Founder & Property Developer',
    imageUrl: '/Images/About/Team/aboutHolly.png',
    bio: `Holly began her journey with life drawings while attending art classes at university. Despite her limited mobility and vision due to Friedrich's Ataxia, a diagnosis she received at the age of 10, her resolve to draw and paint remains strong. Drawing inspiration from Impressionist painters and abstract art, she holds an experimental approach to her craft. Holly shares, "My art is a playground for different mediums and techniques. It's about fun and expressiveness, not confines or limitations. My aim is to engage the viewer's curiosity and imagination. ”With her condition progressing, she continuously seeks fresh, innovative ways to adapt and evolve her artwork. Her experimental collaboration with Josh became a surprise success, spurring her to create more images for him to digitis`,
  },
];

export default function MeetTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-customBlue py-24 md:py-32 lg:py-20">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul className="mt-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none md:gap-x-40">
          {people.map((person) => (
            <li key={person.name}>
              <img className="w-full rounded-2xl object-cover object-top" src={person.imageUrl} alt={person.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-black">{person.name}</h3>
              <p className="text-base leading-7 text-black">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-black">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
