import { FC } from 'react';
import {
  StyledBoxCounter,
  StyledButton,
  StyledContent,
  StyledPrice,
  Wrapper,
} from './ProductHero.styles';

type ProductHeroType = {
  name: string;
  image: string;
  new: boolean;
  price: number;
  description: string;
};

const ProductHero: FC<ProductHeroType> = ({ image, name, new: isNew, description, price }) => {
  return (
    <div>
      <img src={image} alt='' />
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
  );
};

export default ProductHero;
