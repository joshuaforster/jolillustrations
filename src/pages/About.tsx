import React from 'react';
import AboutHead from '../PageComponent/AboutComponents/aboutGallery';
import MeetTeam from '../PageComponent/AboutComponents/meetTeam';
import Different from '../PageComponent/AboutComponents/different';
import Holly from '../PageComponent/AboutComponents/holly';

const About: React.FC = () => {
  return (
    <div>
      <AboutHead/>
      <MeetTeam />
      <Holly />
      <Different />
    </div>
  );
};

export default About;