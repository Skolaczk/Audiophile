import { useAppDispatch } from 'hooks/useRedux';
import { FC, useReducer } from 'react';
import {
  StyledBoxCounter,
  StyledButton,
  StyledContent,
  StyledPrice,
  StyledProductHero,
  Wrapper,
} from './ProductHero.styles';
import { addProduct } from 'store';

type ProductHeroType = {
  cartImage: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  new: boolean;
  productPrice: number;
  price: string;
  description: string;
};

function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count++ };
    case 'decrement':
      if (state.count === 1) return state;
      else return { count: state.count-- };
    case 'reset':
      return { count: 1 };
    default:
      return state;
  }
}

const ProductHero: FC<ProductHeroType> = ({
  cartImage,
  image,
  name,
  new: isNew,
  description,
  productPrice,
  price,
}) => {
  const dispatch = useAppDispatch();
  const [state, dispatchCounter] = useReducer(reducer, { count: 1 });

  const handleAddProduct = () => {
    dispatch(addProduct({ image: cartImage, name, productPrice, quantity: state.count, price }));
    dispatchCounter({ type: 'reset' });
  };

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
        <StyledPrice>$ {productPrice}</StyledPrice>
        <Wrapper>
          <StyledBoxCounter>
            <button onClick={() => dispatchCounter({ type: 'decrement' })}>-</button>
            <div>{state.count}</div>
            <button onClick={() => dispatchCounter({ type: 'increment' })}>+</button>
          </StyledBoxCounter>
          <StyledButton onClick={handleAddProduct}>add to cart</StyledButton>
        </Wrapper>
      </div>
    </StyledProductHero>
  );
};

export default ProductHero;
