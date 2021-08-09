import React from 'react';
import './footer.scss';
import {
  ICDiscord,
  ICFacebook,
  ICGithub,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  LogoSharmasi,
} from '../../../assets';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={LogoSharmasi} className="logo" alt="imageLogo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICInstagram} />
          <Icon img={ICTwitter} />
          <Icon img={ICTelegram} />
          <Icon img={ICGithub} />
          <Icon img={ICDiscord} />
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Copyright {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img src={img} className="icon-medsos" alt="icon" />
    </div>
  );
};

export default Footer;
