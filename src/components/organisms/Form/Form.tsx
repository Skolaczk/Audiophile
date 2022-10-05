import FormField from 'components/molecules/FormField/FormField';
import { InputsWrapper, RadioInputBox, StyledForm, StyledLabel } from './Form.styles';

const Form = () => {
  return (
    <StyledForm id='form'>
      <h2>Checkout</h2>
      <div>
        <h4>biling details</h4>
        <InputsWrapper>
          <FormField id='name' label='Name' type='text' placeholder='Jan Kowalski' />
          <FormField
            id='email-address'
            label='Email Address'
            type='email'
            placeholder='jankowalski@gmail.com'
          />
          <FormField
            id='phone-number'
            label='Phone Number'
            type='number'
            placeholder='+48 123-456-789'
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
          />
          <FormField id='zip-code' label='ZIP Code' type='text' placeholder='10-001' />
          <FormField id='city' label='City' type='text' placeholder='Warszawa' />
          <FormField id='country' label='Country' type='text' placeholder='Poland' />
        </InputsWrapper>
      </div>
      <div>
        <h4>payment details</h4>
        <div>
          <StyledLabel as='p'>Payment Method</StyledLabel>
          <InputsWrapper>
            <RadioInputBox>
              <label htmlFor='e-money'>e-Money</label>
              <input type='radio' value='e-money' name='payment-method' id='e-money' />
            </RadioInputBox>
            <RadioInputBox>
              <label htmlFor='cash-on-delivery'>Cash on Delivery</label>
              <input
                type='radio'
                value='cash-on-delivery'
                name='payment-method'
                id='cash-on-delivery'
              />
            </RadioInputBox>
          </InputsWrapper>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
