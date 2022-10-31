import SignForm from 'components/organisms/SignForm/SignForm';
import SignTemplate from '../SignTemplate/SignTemplate';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate('/');
  }, [currentUser, navigate]);

  return (
    <SignTemplate>
      <SignForm />
    </SignTemplate>
  );
};

export default SignUp;
