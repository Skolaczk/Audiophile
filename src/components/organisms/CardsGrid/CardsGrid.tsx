import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import Speaker from 'images/home/mobile/image-speaker-zx9.png';
import ZX7Speaker from 'images/home/mobile/image-speaker-zx7.jpg';
import PatternCircles from 'images/home/desktop/pattern-circles.svg';
import Earphones from 'images/home/mobile/image-earphones-yx1.jpg';
import { StyledCardsGrid } from './CardsGrid.styles';

const CardsGrid = () => {
  return (
    <StyledCardsGrid patternCircles={PatternCircles} zx7Speaker={ZX7Speaker}>
      <div>
        <img src={Speaker} alt='' />
        <h2>zx9 speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <ButtonLink to=''>see product</ButtonLink>
      </div>
      <div>
        <h2>zx7 speaker</h2>
        <ButtonLink to=''>see product</ButtonLink>
      </div>
      <div>
        <img src={Earphones} alt='' />
      </div>
      <div>
        <h2>xy1 earphones</h2>
        <ButtonLink to=''>see product</ButtonLink>
      </div>
    </StyledCardsGrid>
  );
};

export default CardsGrid;
