import { getSumPrice } from 'helpers/getSumPrice';
import { useAppSelector } from 'hooks/useRedux';
import { CartItem, StyledSummaryWrapper, SummaryItem, SummaryList } from './SummaryWrapper.styles';

const SummaryWrapper = () => {
  const cartList = useAppSelector((state) => state.cartList);

  return (
    <StyledSummaryWrapper>
      <h3>summary</h3>
      {cartList.map(({ id, image, shortName, price, quantity }) => (
        <CartItem key={id}>
          <div>
            <img src={image} alt={`${shortName} image`} />
            <div>
              <h4>{shortName}</h4>
              <p>$ {price}</p>
            </div>
          </div>
          <p>x {quantity}</p>
        </CartItem>
      ))}
      <SummaryList>
        <SummaryItem>
          <p>total</p>
          <p>$ {getSumPrice(cartList)}</p>
        </SummaryItem>
        <SummaryItem>
          <p>vat (included)</p>
          <p>$ {(23 * getSumPrice(cartList)) / 100}</p>
        </SummaryItem>
        <SummaryItem>
          <p>grand total</p>
          <p>$ {getSumPrice(cartList)}</p>
        </SummaryItem>
      </SummaryList>
      <button type='submit' form='form'>
        Continue & pay
      </button>
    </StyledSummaryWrapper>
  );
};

export default SummaryWrapper;
