/* eslint-disable no-constant-condition */
import { useModal } from 'hooks/useModal';
import EmptyCart from 'images/cart/empty-cart.png';
import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import {
  CartItem,
  CounterWrapper,
  ItemCartContent,
  NoItemsWrapper,
  RemoveButton,
  StyledModal,
  Wrapper,
} from './Cart.styles';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { removeAllProduct, changeProductQuantity, clearCart } from 'store';
import { getSumPrice } from 'helpers/getSumPrice';

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

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      contentLabel='Cart Modal'
    >
      {cartList.length > 0 ? (
        <div>
          <Wrapper>
            <h2>cart ({cartList.length})</h2>
            <RemoveButton onClick={handleRemoveAllProduct}>Remove All</RemoveButton>
          </Wrapper>
          <div>
            {cartList.map(({ id, image, name, productPrice, quantity }) => (
              <CartItem key={id}>
                <div>
                  <img src={image} alt='' />
                  <ItemCartContent>
                    <h3>{name}</h3>
                    <p>$ {productPrice}</p>
                  </ItemCartContent>
                </div>
                <CounterWrapper>
                  <button onClick={() => handleChangeProductQuantity(id, 'subtract')}>-</button>
                  <div>{quantity}</div>
                  <button onClick={() => handleChangeProductQuantity(id, 'add')}>+</button>
                </CounterWrapper>
              </CartItem>
            ))}
          </div>
          <Wrapper>
            <p>total</p>
            <p>$ {getSumPrice(cartList)}</p>
          </Wrapper>
          <ButtonLink to='/checkout'>chekout</ButtonLink>
        </div>
      ) : (
        <NoItemsWrapper>
          <p>Your cart is empty</p>
          <img src={EmptyCart} alt='' />
        </NoItemsWrapper>
      )}
    </StyledModal>
  );
};

export default Cart;
