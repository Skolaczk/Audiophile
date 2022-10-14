import SignForm from 'components/organisms/SignForm/SignForm';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignTemplate from '../SignTemplate/SignTemplate';

const SignIn = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate('/account');
  }, [currentUser, navigate]);

  return (
    <SignTemplate isSignIn>
      <SignForm isSignIn />
    </SignTemplate>
  );
};

export default SignIn;
