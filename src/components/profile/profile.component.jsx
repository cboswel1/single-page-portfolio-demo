import { useState, useEffect } from 'react';

import Header from '../header/header.component';
import Button from '../button/button.component';

import profileImageMobile from '../../assets/images/image-profile-mobile.webp';
import profileImageDesktop from '../../assets/images/image-profile-desktop.webp';
import bgRings from '../../assets/images/pattern-rings.svg';
import bgCircle from '../../assets/images/pattern-circle.svg';

import './profile.styles.scss';

const Profile = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 600);
    };

    useEffect(() => {
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
    });

  return (
    <><Header /><main className="profile">

      <div className="profile__hero">
        <img className="profile__bg-rings" src={bgRings} />
        <img className="profile__bg-circle" src={bgCircle} />

        <div className="profile__image--container">
          {isDesktop ? (
            <img src={profileImageDesktop} />
          ) : (
            <img className="profile__mobile" src={profileImageMobile} />
          )}
        </div>
      </div>

      <div className="profile__statement">
        <div className="profile__statement--title">
          <h1>
            Nice to meet you! I'm <span></span>
            <span className="profile__statement--underline"> Adam Keyes</span>.
          </h1>
          <p className="profile__statement--copy">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
        </div>
        <div className="profile__button">
          <Button type="button">Contact Me</Button>
        </div>
      </div>

    </main></>
  );
};

export default Profile;
