import { ReactComponent as FacebookIcon } from 'assets/icons/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/icon-twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/icon-instagram.svg';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <ul>
        <li>home</li>
        <li>headphones</li>
        <li>speakers</li>
        <li>earphones</li>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we are open 7 days a week.
      </p>
      <p>Copyright 2022. All Rights Reserved</p>
      <div>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </StyledFooter>
  );
};

export default Footer;
