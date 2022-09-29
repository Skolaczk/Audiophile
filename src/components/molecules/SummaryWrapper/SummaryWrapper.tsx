/* eslint-disable no-constant-condition */
import Image from 'images/cart/image-yx1-earphones.jpg';
import { CartItem, StyledSummaryWrapper, SummaryItem, SummaryList } from './SummaryWrapper.styles';

const SummaryWrapper = () => {
  return (
    <StyledSummaryWrapper>
      <h3>summary</h3>
      {true ? (
        <CartItem>
          <div>
            <img src={Image} alt='' />
            <div>
              <h4>XX 99 MK II</h4>
              <p>$ 2999</p>
            </div>
          </div>
          <p>x1</p>
        </CartItem>
      ) : (
        <p>No Items in cart</p>
      )}
      <SummaryList>
        <SummaryItem>
          <p>total</p>
          <p>$ 0</p>
        </SummaryItem>
        <SummaryItem>
          <p>shipping</p>
          <p>$ 50</p>
        </SummaryItem>
        <SummaryItem>
          <p>vat (included)</p>
          <p>$ 0</p>
        </SummaryItem>
        <SummaryItem>
          <p>grand total</p>
          <p>$ 50</p>
        </SummaryItem>
      </SummaryList>
      <button type='submit' form='form'>
        Continue & pay
      </button>
    </StyledSummaryWrapper>
  );
};

export default SummaryWrapper;
