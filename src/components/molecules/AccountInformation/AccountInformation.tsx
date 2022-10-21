import AccountField from 'components/atoms/AccountField/AccountField';
import { useAuth } from 'hooks/useAuth';
import { WrapperElement } from './AccountInformation.styles';

const AccountInformation = () => {
  const { currentUser, handleSignOut } = useAuth();

  return (
    <WrapperElement>
      <h3>Account information</h3>
      <AccountField title='Name' content={currentUser?.displayName} />
      <AccountField title='Email' content={currentUser?.email} />
      <AccountField title='Password' content='**********' />
      <button onClick={handleSignOut}>Sign out</button>
    </WrapperElement>
  );
};

export default AccountInformation;
