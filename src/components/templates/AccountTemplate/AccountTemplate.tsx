import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainTemplate from '../MainTemplate/MainTemplate';

const AccountTemplate = () => {
  const { currentUser, handleSignOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
  }, [currentUser, navigate]);

  return (
    <MainTemplate>
      <h1>hello, {currentUser?.displayName}</h1>
      <button onClick={handleSignOut}>log out</button>
    </MainTemplate>
  );
};

export default AccountTemplate;
