import FormField from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import * as Yup from 'yup';
import {
  InputsWrapper,
  RadioInputBox,
  StyledForm,
  StyledInformation,
  StyledLabel,
} from './Form.styles';
import { addDoc, collection } from 'firebase/firestore';
import { getSumPrice } from '../../../helpers/getSumPrice';
import { db } from '../../../firebase/Firebase';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { removeAllProduct } from 'store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Form = () => {
  const { currentUser } = useAuth();
  const cartList = useAppSelector((state) => state.cartList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

  const createOrder = async () => {
    try {
      await addDoc(collection(db, `users/${currentUser?.uid}/orders`), {
        status: 'in progress',
        date: '01-11-2022',
        orderNumber: Math.floor(Math.random() * 100000),
        totalPrice: getSumPrice(cartList),
        products: cartList,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: currentUser?.email,
      phoneNumber: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: '',
      cardNumber: '',
      cvcCode: '',
      expirationDate: '',
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
      cardNumber:
        paymentMethod === 'e-money'
          ? Yup.string()
              .length(16, 'Invalid cart number')
              .matches(/^[0-9]+$/, 'Must be only digits')
              .required('Cart number field is required')
          : Yup.string(),
      cvcCode:
        paymentMethod === 'e-money'
          ? Yup.string()
              .length(3, 'Invalid CVC code')
              .matches(/^[0-9]+$/, 'Must be only digits')
              .required('CVC code field is required')
          : Yup.string(),
      expirationDate:
        paymentMethod === 'e-money'
          ? Yup.string().required('Expiration date field is required')
          : Yup.string(),
    }),
    onSubmit: () => {
      formik.resetForm();
      createOrder();
      dispatch(removeAllProduct());
      navigate('/success');
    },
  });

  useEffect(() => {
    setPaymentMethod(formik.values.paymentMethod);
  }, [formik.values.paymentMethod]);

  return (
    <StyledForm id='form' onSubmit={formik.handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <h4>biling details</h4>
        <InputsWrapper>
          <FormField
            id='name'
            label='Name'
            type='text'
            placeholder='Jan Kowalski'
            onChange={formik.handleChange}
            value={formik.values.name}
            isError={formik.touched.name && formik.errors.name}
          />
          <FormField
            id='email'
            label='Email Address'
            type='email'
            placeholder='jankowalski@gmail.com'
            onChange={formik.handleChange}
            value={formik.values.email!}
            isError={formik.touched.email && formik.errors.email}
          />
          <FormField
            id='phoneNumber'
            label='Phone Number'
            type='string'
            placeholder='+48 123-456-789'
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            isError={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
            onChange={formik.handleChange}
            value={formik.values.address}
            isError={formik.touched.address && formik.errors.address}
          />
          <FormField
            id='zipCode'
            label='ZIP Code'
            type='text'
            placeholder='10-001'
            onChange={formik.handleChange}
            value={formik.values.zipCode}
            isError={formik.touched.zipCode && formik.errors.zipCode}
          />
          <FormField
            id='city'
            label='City'
            type='text'
            placeholder='Warszawa'
            onChange={formik.handleChange}
            value={formik.values.city}
            isError={formik.touched.city && formik.errors.city}
          />
          <FormField
            id='country'
            label='Country'
            type='text'
            placeholder='Poland'
            onChange={formik.handleChange}
            value={formik.values.country}
            isError={formik.touched.country && formik.errors.country}
          />
        </InputsWrapper>
      </div>
      <div>
        <h4>payment details</h4>
        <div>
          <StyledLabel as='p'>Payment Method</StyledLabel>
          <InputsWrapper>
            <RadioInputBox>
              <label htmlFor='e-money'>e-Money</label>
              <input
                type='radio'
                value='e-money'
                name='paymentMethod'
                id='e-money'
                onChange={formik.handleChange}
              />
            </RadioInputBox>
            <RadioInputBox>
              <label htmlFor='cash-on-delivery'>Cash on Delivery</label>
              <input
                type='radio'
                value='cash-on-delivery'
                name='paymentMethod'
                id='cash-on-delivery'
                onChange={formik.handleChange}
              />
            </RadioInputBox>
            {paymentMethod === 'e-money' ? (
              <>
                <FormField
                  isBig
                  id='cardNumber'
                  label='Cart Number'
                  type='string'
                  placeholder='4242 4242 4242 4242'
                  onChange={formik.handleChange}
                  value={formik.values.cardNumber}
                  isError={formik.touched.cardNumber && formik.errors.cardNumber}
                />
                <FormField
                  id='expirationDate'
                  label='Expiration data'
                  type='string'
                  placeholder='12/27'
                  onChange={formik.handleChange}
                  value={formik.values.expirationDate}
                  isError={formik.touched.expirationDate && formik.errors.expirationDate}
                />
                <FormField
                  id='cvcCode'
                  label='CVC'
                  type='string'
                  placeholder='123'
                  onChange={formik.handleChange}
                  value={formik.values.cvcCode}
                  isError={formik.touched.cvcCode && formik.errors.cvcCode}
                />
              </>
            ) : (
              <StyledInformation>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                arrives at your residence. Just make sure your address is correct so that your order
                will not be cancelled.
              </StyledInformation>
            )}
          </InputsWrapper>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
