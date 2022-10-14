import { FC } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import { StyledButton, StyledForm } from './SignForm.styles';

type SignFormType = {
  isSignIn?: boolean;
};

const SignForm: FC<SignFormType> = ({ isSignIn }) => {
  const { handleInputChange, handleSignUp, handleSignIn } = useAuth();
  const { error } = useError();
  return (
    <StyledForm action=''>
      {!isSignIn ? (
        <FormField
          id='name'
          label='Name'
          type='text'
          placeholder='Jan'
          onChange={handleInputChange}
          isError={error}
        />
      ) : null}
      <FormField
        id='email'
        label='Email'
        type='text'
        placeholder='jankowalski@gmail.com'
        onChange={handleInputChange}
        isError={error}
      />
      <FormField
        id='password'
        label='Password'
        type='password'
        placeholder='*********'
        onChange={handleInputChange}
        isError={error}
      />
      <StyledButton onClick={isSignIn ? handleSignIn : handleSignUp}>
        {isSignIn ? 'Sign in' : 'Sign up'}
      </StyledButton>
    </StyledForm>
  );
};

export default SignForm;
