import { useState, useEffect } from 'react';
import './projects.styles.scss';

import Button from '../button/button.component';

//Desktop
import DesignPortfolioDesktop from '../../assets/images/thumbnail-project-1-large.webp';
import LearningLandingDesktop from '../../assets/images/thumbnail-project-2-large.webp';
import TodoWebDesktop from '../../assets/images/thumbnail-project-3-large.webp';
import EntertainmentDesktop from '../../assets/images/thumbnail-project-4-large.webp';
import MemoryGameDesktop from '../../assets/images/thumbnail-project-5-large.webp';
import ArtGalleryDesktop from '../../assets/images/thumbnail-project-6-large.webp';

//Mobile
import DesignPortfolioMobile from '../../assets/images/thumbnail-project-1-small.webp';
import LearningLandingMobile from '../../assets/images/thumbnail-project-2-small.webp';
import TodoWebMobile from '../../assets/images/thumbnail-project-3-small.webp';
import EntertainmentMobile from '../../assets/images/thumbnail-project-4-small.webp';
import MemoryGameMobile from '../../assets/images/thumbnail-project-5-small.webp';
import ArtGalleryMobile from '../../assets/images/thumbnail-project-6-small.webp';

const Projects = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const projects = [
    {
      id: 1,
      DesktopImage: `${DesignPortfolioDesktop}`,
      MobileImage: `${DesignPortfolioMobile}`,
      name: 'Design Portfolio',
      techOne: 'HTML',
      techTwo: 'CSS',
    },
    {
      id: 2,
      DesktopImage: `${LearningLandingDesktop}`,
      MobileImage: `${LearningLandingMobile}`,
      name: 'E-learning Landing Page',
      techOne: 'HTML',
      techTwo: 'CSS',
    },
    {
      id: 3,
      DesktopImage: `${TodoWebDesktop}`,
      MobileImage: `${TodoWebMobile}`,
      name: 'Todo Web App',
      techOne: 'HTML',
      techTwo: 'CSS',
      techThree: 'JavaScript',
    },
    {
      id: 4,
      DesktopImage: `${EntertainmentDesktop}`,
      MobileImage: `${EntertainmentMobile}`,
      name: 'Entertainment Web App',
      techOne: 'HTML',
      techTwo: 'CSS',
      techThree: 'JavaScript',
    },
    {
      id: 5,
      DesktopImage: `${MemoryGameDesktop}`,
      MobileImage: `${MemoryGameMobile}`,
      name: 'Memory Game',
      techOne: 'HTML',
      techTwo: 'CSS',
      techThree: 'JavaScript',
    },
    {
      id: 5,
      DesktopImage: `${ArtGalleryDesktop}`,
      MobileImage: `${ArtGalleryMobile}`,
      name: 'Art Gallery Showcase',
      techOne: 'HTML',
      techTwo: 'CSS',
      techThree: 'JavaScript',
    },
  ];

  return (
    <div className="projects">
      <div className="projects__header--container">
        <h2>Projects</h2>
        <Button type="button">Contact Me</Button>
      </div>
      {projects.map((projects) => {
        return (
          <div className="projects__content" key={projects.id}>
            <div className="projects__wrapper">
              <div className="projects__image--wrapper">
                {isDesktop ? (
                  <img
                    className="projects__image--desktop"
                    src={projects.DesktopImage}
                  />
                ) : (
                  <img
                    className="projects__image--mobile"
                    src={projects.MobileImage}
                  />
                )}
              </div>
              <div className="projects__info--wrapper">
                <h3 className="projects__title">{projects.name}</h3>
                <div className="projects__tech">
                  <p>{projects.techOne}</p>
                  <p>{projects.techTwo}</p>
                  <p>{projects.techThree}</p>
                </div>
                
              </div>
              <div className="projects__projects--links">
                  <Button type="button">View Project</Button>
                  <Button type="button">View Code</Button>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
