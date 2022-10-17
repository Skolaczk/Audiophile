/* eslint-disable no-constant-condition */
import { getSumPrice } from 'helpers/getSumPrice';
import { useAppSelector } from 'hooks/useRedux';
import { CartItem, StyledSummaryWrapper, SummaryItem, SummaryList } from './SummaryWrapper.styles';

const SummaryWrapper = () => {
  const cartList = useAppSelector((state) => state.cartList);

  return (
    <StyledSummaryWrapper>
      <h3>summary</h3>
      {true ? (
        cartList.map(({ id, image, name, productPrice, quantity }) => (
          <CartItem key={id}>
            <div>
              <img src={image} alt='' />
              <div>
                <h4>{name}</h4>
                <p>$ {productPrice}</p>
              </div>
            </div>
            <p>x {quantity}</p>
          </CartItem>
        ))
      ) : (
        <p>No Items in cart</p>
      )}
      <SummaryList>
        <SummaryItem>
          <p>total</p>
          <p>$ {getSumPrice(cartList)}</p>
        </SummaryItem>
        <SummaryItem>
          <p>shipping</p>
          <p>$ 50</p>
        </SummaryItem>
        <SummaryItem>
          <p>vat (included)</p>
          <p>$ {(23 * getSumPrice(cartList)) / 100}</p>
        </SummaryItem>
        <SummaryItem>
          <p>grand total</p>
          <p>$ {getSumPrice(cartList) + 50 + (23 * getSumPrice(cartList)) / 100}</p>
        </SummaryItem>
      </SummaryList>
      <button type='submit' form='form'>
        Continue & pay
      </button>
    </StyledSummaryWrapper>
  );
};

export default SummaryWrapper;
