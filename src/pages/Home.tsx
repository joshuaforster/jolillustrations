import React from 'react';
import Hero from '../PageComponent/HomeComponents/Hero';
import WhyJol from '../PageComponent/HomeComponents/whyJol';
import Testimonials from '../PageComponent/HomeComponents/Testimonials';
import SocialMedia from '../PageComponent/HomeComponents/SocialMedia';

export default function Home() {
  return (
    <div >
      <Hero />
      <WhyJol />
      <Testimonials />
      <SocialMedia />
    </div>
  );
};

