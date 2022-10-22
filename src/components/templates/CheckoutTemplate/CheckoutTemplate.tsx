/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { CurrentUserEmailType } from 'types';

const stripePromise = loadStripe(
  'pk_test_51LtAb8LPiJF5XvZcweOe1Mw9eTySLsMBfMidy6BxEzV8H5X09iMeXQe8kC4GnhDJro1CWEGGJmtBa36DzrxkUH6a005VVg4jgY',
);

const CheckoutTemplate = () => {
  const { currentUser } = useAuth();
  const cartList = useAppSelector((state) => state.cartList);
  const navigate = useNavigate();

  const handleRedirectToCheckout = async () => {
    const lineItems = cartList.map(
      ({ id, shortName, image, productPrice, ...keepAttrs }) => keepAttrs,
    );

    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl: 'http://localhost:3000/',
      cancelUrl: 'http://localhost:3000/',
      customerEmail: currentUser?.email as CurrentUserEmailType,
    });
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
            <Form handleRedirectToCheckout={handleRedirectToCheckout} />
            <SummaryWrapper />
          </CheckoutWrapper>
        </ViewWrapper>
      </Background>
    </MainTemplate>
  );
};

export default CheckoutTemplate;
