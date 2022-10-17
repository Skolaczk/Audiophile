import FormField from 'components/molecules/FormField/FormField';
import { useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import { InputsWrapper, RadioInputBox, StyledForm, StyledLabel } from './Form.styles';

const Form: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: '',
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
    onSubmit: (values) => {
      console.log(values);
      handleClick();
      formik.resetForm();
    },
  });

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
            value={formik.values.email}
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
                checked
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
          </InputsWrapper>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
