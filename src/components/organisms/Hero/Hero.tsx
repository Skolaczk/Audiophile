import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import HeroImage from 'images/mobile/image-hero.jpg';
import HeroImageDesktop from 'images/desktop/image-hero.jpg';
import { StyledHero } from './Hero.styles';

const Hero = () => {
  return (
    <StyledHero heroImage={HeroImage} heroImageDesktop={HeroImageDesktop}>
      <div>
        <h2>New product</h2>
        <h1>xx99 mark ii headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <ButtonLink to='/category/headphones/xx99-mark-two-headphones'>see product</ButtonLink>
      </div>
    </StyledHero>
  );
};

export default Hero;
