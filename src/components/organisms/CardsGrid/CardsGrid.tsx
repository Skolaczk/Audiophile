import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import Speaker from 'images/home/mobile/image-speaker-zx9.png';
import ZX7Speaker from 'images/home/mobile/image-speaker-zx7.jpg';
import PatternCircles from 'images/home/desktop/pattern-circles.svg';
import Earphones from 'images/home/mobile/image-earphones-yx1.jpg';
import { FirstCard, SecondCard, StyledCardsGrid, ThirdCard, Wrapper } from './CardsGrid.styles';

const CardsGrid = () => {
  return (
    <StyledCardsGrid>
      <FirstCard patternCircles={PatternCircles}>
        <img src={Speaker} alt='' />
        <h2>zx9 speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <ButtonLink to=''>see product</ButtonLink>
      </FirstCard>
      <SecondCard zx7Speaker={ZX7Speaker}>
        <h2>zx7 speaker</h2>
        <ButtonLink to=''>see product</ButtonLink>
      </SecondCard>
      <Wrapper>
        <img src={Earphones} alt='' />
        <ThirdCard>
          <h2>xy1 earphones</h2>
          <ButtonLink to=''>see product</ButtonLink>
        </ThirdCard>
      </Wrapper>
    </StyledCardsGrid>
  );
};

export default CardsGrid;
