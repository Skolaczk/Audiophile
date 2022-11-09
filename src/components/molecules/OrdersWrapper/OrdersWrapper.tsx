import { db } from '../../../firebase/Firebase';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { useAuth } from 'hooks/useAuth';
import { useState, useEffect } from 'react';
import { CartType } from 'types';
import {
  OrderInforamtion,
  OrderProducts,
  StyledOrder,
  StyledPrice,
  Wrapper,
} from './OrdersWrapper.styles';

const OrdersWrapper = () => {
  const [orders, setOrders] = useState<Array<DocumentData>>();
  const { currentUser } = useAuth();
  const colRef = collection(db, `users/${currentUser?.uid}/orders`);

  useEffect(() => {
    const getOrders = async () => {
      const querySnapshot = await getDocs(colRef);

      const ordersArray: Array<DocumentData> = [];
      querySnapshot.forEach((doc) => {
        ordersArray.push(doc.data());
      });
      setOrders(ordersArray);
    };

    getOrders();
  }, []);

  return (
    <Wrapper>
      <h3>Orders</h3>
      {orders?.length ? (
        <div>
          {orders.map(({ products, orderNumber, date, status, totalPrice }) => (
            <StyledOrder key={orderNumber}>
              <OrderInforamtion>
                <h4>{status}</h4>
                <p>{date}</p>
                <p>nr {orderNumber}</p>
                <StyledPrice>$ {totalPrice}</StyledPrice>
              </OrderInforamtion>
              <OrderProducts>
                {products.map(({ id, image, shortName, quantity, productPrice }: CartType) => (
                  <div key={id}>
                    <img src={image} alt={`${shortName} image`} />
                    <h5>
                      {shortName} x{quantity}
                    </h5>
                    <p>$ {productPrice}</p>
                  </div>
                ))}
              </OrderProducts>
            </StyledOrder>
          ))}
        </div>
      ) : (
        <div>
          <h4>You dont have any orders</h4>
          <p>When you complete your first order, it will appear here.</p>
        </div>
      )}
    </Wrapper>
  );
};

export default OrdersWrapper;
