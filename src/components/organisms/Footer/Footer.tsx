import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { CenterWrapper, IconsWrapper, StyledFooter, Wrapper } from './Footer.styles';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <CenterWrapper>
        <Wrapper>
          <Link to='/'>
            <Logo />
          </Link>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/headphones'>headphones</Link>
            </li>
            <li>
              <Link to='/speakers'>speakers</Link>
            </li>
            <li>
              <Link to='/earphones'>earphones</Link>
            </li>
          </ul>
        </Wrapper>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music
          lovers and sound specialists who are devoted to helping you get the most out of personal
          audio. Come and visit our demo facility - we are open 7 days a week.
        </p>
        <Wrapper>
          <p>Copyright 2022. All Rights Reserved</p>
          <IconsWrapper>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </IconsWrapper>
        </Wrapper>
      </CenterWrapper>
    </StyledFooter>
  );
};

export default Footer;
