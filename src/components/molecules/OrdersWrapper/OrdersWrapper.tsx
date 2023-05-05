import { db } from '../../../firebase/Firebase';
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore';
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

  useEffect(() => {
    const getOrders = async () => {
      const q = query(collection(db, 'orders'), where('customerEmail', '==', currentUser?.email));
      const querySnapshot = await getDocs(q);

      const ordersArray: Array<DocumentData> = [];
      querySnapshot.forEach((doc) => {
        ordersArray.push(doc.data());
      });
      setOrders(ordersArray);
    };

    getOrders();
    console.log(orders);
  }, []);

  return (
    <Wrapper>
      <h3>Orders</h3>
      {orders?.length ? (
        <div>
          {orders.map(({ id, amountTotal, date, paymentStatus, products }) => (
            <StyledOrder key={id}>
              <OrderInforamtion>
                <h4>Status: {paymentStatus}</h4>
                <p>{date}</p>
                <p>nr. {id}</p>
                <StyledPrice>$ {amountTotal}</StyledPrice>
              </OrderInforamtion>
              <OrderProducts>
                {products.map(({ id, shortName, quantity, price }: CartType) => (
                  <div key={id}>
                    <h5>
                      {shortName} x{quantity}
                    </h5>
                    <p>$ {price}</p>
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
