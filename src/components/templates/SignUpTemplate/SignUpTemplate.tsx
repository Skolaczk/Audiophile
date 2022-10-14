import SignForm from 'components/organisms/SignForm/SignForm';
import SignTemplate from '../SignTemplate/SignTemplate';

const SignUp = () => {
  return (
    <SignTemplate isSignIn={false}>
      <SignForm />
    </SignTemplate>
  );
};

export default SignUp;
