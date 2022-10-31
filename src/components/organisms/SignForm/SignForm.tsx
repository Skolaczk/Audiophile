import { FC } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import { StyledButton, StyledError, StyledForm } from './SignForm.styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IsSignInType } from 'types';

const SignForm: FC<IsSignInType> = ({ isSignIn }) => {
  const { handleSignUp, handleSignIn } = useAuth();
  const { error } = useError();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: isSignIn ? Yup.string() : Yup.string().required('Name field is required'),
      email: Yup.string().email('Invalid email address').required('Email field is required'),
      password: Yup.string().min(6, 'Password is too short').required('Password field is required'),
    }),
    onSubmit: (values) => {
      isSignIn ? handleSignIn(values) : handleSignUp(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {!isSignIn && (
        <FormField
          id='name'
          label='Name'
          type='text'
          placeholder='Jan'
          onChange={formik.handleChange}
          isError={formik.touched.name && formik.errors.name}
          value={formik.values.name}
        />
      )}
      <FormField
        id='email'
        label='Email'
        type='text'
        placeholder='jankowalski@gmail.com'
        onChange={formik.handleChange}
        isError={formik.touched.email && formik.errors.email}
        value={formik.values.email}
      />
      <FormField
        id='password'
        label='Password'
        type='password'
        placeholder='*********'
        onChange={formik.handleChange}
        isError={formik.touched.password && formik.errors.password}
        value={formik.values.password}
      />
      <StyledButton type='submit'>{isSignIn ? 'Sign in' : 'Sign up'}</StyledButton>
      {error && <StyledError>{error}</StyledError>}
    </StyledForm>
  );
};

export default SignForm;
