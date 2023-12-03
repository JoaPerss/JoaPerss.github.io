import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const SkillsCarousel = ({ skillsImage }) => {
  const splideOptions = {
    type       : 'loop',
    pagination : false,
    autoWidth  : true,
    gap        : '1rem',
    autoplay   : true,
    speed      : 110000,
    interval   : 0,
    arrows     : false,
  };

  return (
    <div className="container mx-auto bg-peach w-full p-5 rounded-lg opacity-98 h-max mt-5 pb-20">
      <h1 className="text-4xl md:text-7xl text-center font-aloevera my-10">My Skills and Technologies</h1>
      <Splide options={splideOptions}>
        {skillsImage.map((skillImage, index) => (
          <SplideSlide key={index} className="text-center font-aloevera">
            <img
              className="h-32 md:h-48 object-fit: contain"
              src={skillImage}
              alt={`Skill ${index + 1}`}
              draggable="false"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SkillsCarousel;
