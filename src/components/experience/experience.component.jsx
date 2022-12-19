import React from 'react';
import './experience.styles.scss';

import bgRings from '../../assets/images/pattern-rings.svg';

const Experience = () => {
  const experience = [
    { id: 1, name: 'HTML', time: '4 Years of Experience' },
    { id: 2, name: 'CSS', time: '4 Years of Experience' },
    { id: 3, name: 'Javascript', time: '4 Years of Experience' },
    { id: 4, name: 'Accessibility', time: '4 Years of Experience' },
    { id: 5, name: 'React', time: '3 Years of Experience' },
    { id: 5, name: 'Sass', time: '3 Years of Experience' },
  ];

  return (
    <div className="experience">
    
      <div className="experience__wrapper">
      <img className="experience__bg-rings" src={bgRings} />
        {experience.map((experience) => {
          return (
            <div className="experience__content" key={experience.id}>
              <h2 className="experience__title">{experience.name}</h2>
              <p>{experience.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
