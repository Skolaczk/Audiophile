import { WrapperElement } from './OrdersWrapper.styles';

const OrdersWrapper = () => {
  return (
    <WrapperElement>
      <h3>Orders</h3>
      <div>
        <h4>You dont have any orders</h4>
        <p>When you complete your first order, it will appear here.</p>
      </div>
    </WrapperElement>
  );
};

export default OrdersWrapper;
