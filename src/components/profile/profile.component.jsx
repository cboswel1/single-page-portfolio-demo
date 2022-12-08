import { useState, useEffect } from 'react';

import profileImageMobile from '../../assets/images/image-profile-mobile.webp';
import profileImageTablet from '../../assets/images/image-profile-tablet.webp';
import profileImageDesktop from '../../assets/images/image-profile-desktop.webp';
import bgRings from '../../assets/images/pattern-rings.svg';
import bgCircle from '../../assets/images/pattern-circle.svg';

import './profile.styles.scss';

const Profile = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1110);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1110);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <main className="profile">
      <div>
        <img className="profile__bg-rings" src={bgRings} />
        <img className="profile__bg-circle" src={bgCircle} />
        {isDesktop ? (
          <img src={profileImageDesktop} />
        ) : (
          <img className="profile__mobile-img" src={profileImageMobile} />
        )}
      </div>

      <div className="profile__statement">
        <h1>Nice to meet you! I'm Adam Keyes.</h1>
        <p>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <button>Contact Me</button>
      </div>
    </main>
  );
};

export default Profile;
