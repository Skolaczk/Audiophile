import SignForm from 'components/organisms/SignForm/SignForm';
import SignTemplate from '../SignTemplate/SignTemplate';

const SignIn = () => {
  return (
    <SignTemplate isSignIn>
      <SignForm isSignIn />
    </SignTemplate>
  );
};

export default SignIn;
