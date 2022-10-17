/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import MainTemplate from '../MainTemplate/MainTemplate';
import Form from 'components/organisms/Form/Form';
import SummaryWrapper from 'components/molecules/SummaryWrapper/SummaryWrapper';
import { Background, CheckoutWrapper } from './CheckoutTemplate.styles';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useAppSelector } from 'hooks/useRedux';

const stripePromise = loadStripe(
  'pk_test_51LtAb8LPiJF5XvZcweOe1Mw9eTySLsMBfMidy6BxEzV8H5X09iMeXQe8kC4GnhDJro1CWEGGJmtBa36DzrxkUH6a005VVg4jgY',
);

const CheckoutTemplate = () => {
  const { currentUser } = useAuth();
  const cartList = useAppSelector((state) => state.cartList);
  const navigate = useNavigate();

  const handleClick = async () => {
    const newArray = cartList.map(({ id, name, image, productPrice, ...keepAttrs }) => keepAttrs);

    const stripe = await stripePromise;
    const stripeRedirect = await stripe?.redirectToCheckout({
      lineItems: newArray,
      mode: 'payment',
      successUrl: 'http://localhost:3000/',
      cancelUrl: 'http://localhost:3000/',
      customerEmail: currentUser?.email!,
    });
    console.log(stripeRedirect?.error);
  };

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
  }, [currentUser, navigate]);

  return (
    <MainTemplate>
      <Background>
        <ViewWrapper>
          <GoBackLink />
          <CheckoutWrapper>
            <Form handleClick={handleClick} />
            <SummaryWrapper />
          </CheckoutWrapper>
        </ViewWrapper>
      </Background>
    </MainTemplate>
  );
};

export default CheckoutTemplate;
