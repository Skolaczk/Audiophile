import { FC } from 'react';
import {
  StyledBoxCounter,
  StyledButton,
  StyledContent,
  StyledPrice,
  StyledProductHero,
  Wrapper,
} from './ProductHero.styles';

type ProductHeroType = {
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  new: boolean;
  price: number;
  description: string;
};

const ProductHero: FC<ProductHeroType> = ({ image, name, new: isNew, description, price }) => {
  return (
    <StyledProductHero>
      <picture>
        <source media='(min-width: 768px)' srcSet={image.desktop} />
        <source media='(min-width: 500px)' srcSet={image.tablet} />
        <img src={image.mobile} alt='' />
      </picture>
      <div>
        {isNew ? <h5>new product</h5> : null}
        <h2>{name}</h2>
        <StyledContent>{description}</StyledContent>
        <StyledPrice>$ {price}</StyledPrice>
        <Wrapper>
          <StyledBoxCounter>
            <button>-</button>
            <div>1</div>
            <button>+</button>
          </StyledBoxCounter>
          <StyledButton>add to cart</StyledButton>
        </Wrapper>
      </div>
    </StyledProductHero>
  );
};

export default ProductHero;
