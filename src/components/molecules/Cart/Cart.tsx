import { useModal } from 'hooks/useModal';
import EmptyCart from 'images/desktop/empty-cart.png';
import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import {
  CartItem,
  CounterWrapper,
  ItemCartContent,
  NoItemsWrapper,
  overlay,
  RemoveButton,
  StyledModal,
  Wrapper,
} from './Cart.styles';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { removeAllProduct, changeProductQuantity, clearCart } from 'store';
import { getSumPrice } from 'helpers/getSumPrice';
import { ActionTypes } from 'constants/index';
import { getQuantityProducts } from 'helpers/getQuantityProducts';
import { useEffect } from 'react';

const Cart = () => {
  const { modalIsOpen, toggleModal } = useModal();
  const cartList = useAppSelector((state) => state.cartList);
  const dispatch = useAppDispatch();

  const handleRemoveAllProduct = () => {
    dispatch(removeAllProduct());
  };

  const handleChangeProductQuantity = (id: string, type: string) => {
    dispatch(changeProductQuantity({ id, type }));
    dispatch(clearCart());
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalIsOpen]);

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      style={{ overlay }}
      contentLabel='Cart Modal'
      appElement={document.getElementById('root') as HTMLElement}
    >
      {cartList.length > 0 ? (
        <div>
          <Wrapper>
            <h2>cart ({getQuantityProducts(cartList)})</h2>
            <RemoveButton onClick={handleRemoveAllProduct}>Remove All</RemoveButton>
          </Wrapper>
          <div>
            {cartList.map(({ id, image, shortName, productPrice, quantity }) => (
              <CartItem key={id}>
                <div>
                  <img src={image} alt={`${shortName} image`} />
                  <ItemCartContent>
                    <h3>{shortName}</h3>
                    <p>$ {productPrice}</p>
                  </ItemCartContent>
                </div>
                <CounterWrapper>
                  <button onClick={() => handleChangeProductQuantity(id, ActionTypes.Subtract)}>
                    -
                  </button>
                  <div>{quantity}</div>
                  <button onClick={() => handleChangeProductQuantity(id, ActionTypes.Add)}>
                    +
                  </button>
                </CounterWrapper>
              </CartItem>
            ))}
          </div>
          <Wrapper>
            <p>total</p>
            <p>$ {getSumPrice(cartList)}</p>
          </Wrapper>
          <ButtonLink to='/checkout'>checkout</ButtonLink>
        </div>
      ) : (
        <NoItemsWrapper>
          <p>Your cart is empty</p>
          <img src={EmptyCart} alt='Empty cart image' />
        </NoItemsWrapper>
      )}
    </StyledModal>
  );
};

export default Cart;
