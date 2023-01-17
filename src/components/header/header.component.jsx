import React from 'react';
import './header.styles.scss';

import GitHub from '../../assets/images/icon-github.svg';
import FrontEnd from '../../assets/images/icon-frontend-mentor.svg'
import LinkedIn from '../../assets/images/icon-linkedin.svg'
import Twitter from '../../assets/images/icon-twitter.svg'

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="header__name">adamkeyes</h1>
      </div>
      <div className="header__socials">
        <img className="header__socials--icons" src={GitHub} />
        <img className="header__socials--icons" src={FrontEnd} />
        <img className="header__socials--icons" src={LinkedIn} />
        <img className="header__socials--icons" src={Twitter} />
      </div>
    </div>
  );
};

export default Header;
