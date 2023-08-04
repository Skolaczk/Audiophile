import { useAppDispatch } from 'hooks/useRedux';
import { FC, useReducer, useState } from 'react';
import {
  StyledBoxCounter,
  StyledButton,
  StyledContent,
  StyledPrice,
  StyledProductHero,
  Wrapper,
} from './ProductHero.styles';
import { addProduct } from 'store';
import { ActionTypes } from 'constants/index';
import SuccessInformation from 'components/molecules/SuccessInformation/SuccessInforamtion';
import { DocumentData } from 'firebase/firestore';

type ActionType = {
  type: string;
};

type CountType = {
  count: number;
};

const reducer = (state: CountType, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.Add:
      return { count: ++state.count };
    case ActionTypes.Subtract:
      if (state.count === 1) return state;
      else return { count: --state.count };
    case ActionTypes.Reset:
      return { count: 1 };
    default:
      return state;
  }
};

const ProductHero: FC<DocumentData> = (product) => {
  const { cartImage, image, name, shortName, isNew, description, price } = product;
  const dispatch = useAppDispatch();
  const [counter, dispatchCounter] = useReducer(reducer, { count: 1 });
  const [isOpen, setIsOpen] = useState(false);

  const closeSuccesInformation = () => setIsOpen(false);

  const toggleSuccesInformation = () => {
    setIsOpen(true);
    setTimeout(() => {
      closeSuccesInformation();
    }, 3000);
  };

  const handleAddProduct = () => {
    dispatch(addProduct({ image: cartImage, shortName, quantity: counter.count, price }));
    dispatchCounter({ type: ActionTypes.Reset });
    toggleSuccesInformation();
  };

  return (
    <>
      <SuccessInformation
        name={name}
        isOpen={isOpen}
        closeSuccesInformation={closeSuccesInformation}
      />
      <StyledProductHero>
        <picture>
          <source media='(min-width: 768px)' srcSet={image.desktop} />
          <source media='(min-width: 500px)' srcSet={image.tablet} />
          <img src={image.mobile} alt={`${name} image`} />
        </picture>
        <div>
          {isNew && <h5>new product</h5>}
          <h2>{name}</h2>
          <StyledContent>{description}</StyledContent>
          <StyledPrice>$ {price}</StyledPrice>
          <Wrapper>
            <StyledBoxCounter>
              <button onClick={() => dispatchCounter({ type: ActionTypes.Subtract })}>-</button>
              <div>{counter.count}</div>
              <button onClick={() => dispatchCounter({ type: ActionTypes.Add })}>+</button>
            </StyledBoxCounter>
            <StyledButton onClick={handleAddProduct}>add to cart</StyledButton>
          </Wrapper>
        </div>
      </StyledProductHero>
    </>
  );
};

export default ProductHero;
