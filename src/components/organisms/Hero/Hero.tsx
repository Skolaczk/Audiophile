import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import HeroImage from 'images/home/mobile/image-hero.jpg';
import HeroImageDesktop from 'images/home/desktop/image-hero.jpg';
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
        <ButtonLink to='/category/xx99-mark-one-headphones'>see product</ButtonLink>
      </div>
    </StyledHero>
  );
};

export default Hero;
