import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import ZX9Speaker from 'images/mobile/image-speaker-zx9.png';
import ZX7Speaker from 'images/mobile/image-speaker-zx7.jpg';
import XY1Earphones from 'images/mobile/image-earphones-yx1.jpg';
import PatternCircles from 'images/desktop/pattern-circles.svg';
import { FirstCard, SecondCard, StyledCardsGrid, ThirdCard, Wrapper } from './CardsGrid.styles';

const CardsGrid = () => {
  return (
    <StyledCardsGrid>
      <FirstCard patternCircles={PatternCircles}>
        <img src={ZX9Speaker} alt='ZX9 speaker image' />
        <h2>zx9 speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <ButtonLink to='/category/speakers/zx9-speaker'>see product</ButtonLink>
      </FirstCard>
      <SecondCard zx7Speaker={ZX7Speaker}>
        <h2>zx7 speaker</h2>
        <ButtonLink to='/category/speakers/zx7-speaker'>see product</ButtonLink>
      </SecondCard>
      <Wrapper>
        <img src={XY1Earphones} alt='XY1 earphones image' />
        <ThirdCard>
          <h2>xy1 earphones</h2>
          <ButtonLink to='/category/earphones/yx1-earphones'>see product</ButtonLink>
        </ThirdCard>
      </Wrapper>
    </StyledCardsGrid>
  );
};

export default CardsGrid;
