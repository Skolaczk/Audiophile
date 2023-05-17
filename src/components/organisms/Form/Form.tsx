import FormField from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import * as Yup from 'yup';
import { InputsWrapper, SpinnerOverlay, StyledForm } from './Form.styles';
import { functions } from '../../../firebase/Firebase';
import { useAppSelector } from 'hooks/useRedux';
import { httpsCallable } from 'firebase/functions';
import { loadStripe } from '@stripe/stripe-js';
import Spinner from 'components/atoms/Spinner/Spinner';
import { useState } from 'react';

const stripeKey =
  'pk_test_51LtAb8LPiJF5XvZcweOe1Mw9eTySLsMBfMidy6BxEzV8H5X09iMeXQe8kC4GnhDJro1CWEGGJmtBa36DzrxkUH6a005VVg4jgY';

const Form = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const cartList = useAppSelector((state) => state.cartList);

  const redirectToCheckout = async () => {
    const stripeCartList = cartList.map(({ price, quantity, shortName }) => {
      return {
        quantity,
        price_data: {
          currency: 'usd',
          unit_amount: price * 100,
          product_data: {
            name: shortName,
          },
        },
      };
    });
    const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');
    const stripePromise = loadStripe(stripeKey);
    const stripe = await stripePromise;
    const { data } = await createStripeCheckout({
      products: stripeCartList,
      userEmail: currentUser?.email,
    });
    const { id } = data as { id: string };
    stripe!.redirectToCheckout({ sessionId: id });
  };

  const { handleSubmit, handleChange, values, touched, errors, resetForm } = useFormik({
    initialValues: {
      name: '',
      email: currentUser?.email,
      phoneNumber: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name field is required'),
      email: Yup.string().email('Invalid email address').required('Email field is required'),
      phoneNumber: Yup.string()
        .length(9, 'Invalid phone number')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .required('Phone number field is required'),
      address: Yup.string().required('Address field is required'),
      zipCode: Yup.string()
        .length(5, 'Invalid ZIP code')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .required('ZIP code field is required'),
      city: Yup.string().required('City field is required'),
      country: Yup.string().required('Country field is required'),
    }),
    onSubmit: () => {
      resetForm();
      redirectToCheckout();
      setIsLoading(true);
    },
  });

  return (
    <>
      <StyledForm id='form' onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <div>
          <h4>biling details</h4>
          <InputsWrapper>
            <FormField
              id='name'
              label='Name'
              type='text'
              placeholder='Jan Kowalski'
              onChange={handleChange}
              value={values.name}
              isError={touched.name && errors.name}
            />
            <FormField
              id='email'
              label='Email Address'
              type='email'
              placeholder='jankowalski@gmail.com'
              onChange={handleChange}
              value={values.email!}
              isError={touched.email && errors.email}
            />
            <FormField
              id='phoneNumber'
              label='Phone Number'
              type='string'
              placeholder='+48 123-456-789'
              onChange={handleChange}
              value={values.phoneNumber}
              isError={touched.phoneNumber && errors.phoneNumber}
            />
          </InputsWrapper>
        </div>
        <div>
          <h4>shipping info</h4>
          <InputsWrapper>
            <FormField
              isBig
              id='address'
              label='Your Address'
              type='text'
              placeholder='01 Mickiewicza'
              onChange={handleChange}
              value={values.address}
              isError={touched.address && errors.address}
            />
            <FormField
              id='zipCode'
              label='ZIP Code'
              type='text'
              placeholder='10-001'
              onChange={handleChange}
              value={values.zipCode}
              isError={touched.zipCode && errors.zipCode}
            />
            <FormField
              id='city'
              label='City'
              type='text'
              placeholder='Warszawa'
              onChange={handleChange}
              value={values.city}
              isError={touched.city && errors.city}
            />
            <FormField
              id='country'
              label='Country'
              type='text'
              placeholder='Poland'
              onChange={handleChange}
              value={values.country}
              isError={touched.country && errors.country}
            />
          </InputsWrapper>
        </div>
      </StyledForm>
      {isLoading && (
        <SpinnerOverlay>
          <Spinner isLoading={isLoading} />
        </SpinnerOverlay>
      )}
    </>
  );
};

export default Form;
