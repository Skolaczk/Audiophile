import { useAuth } from 'hooks/useAuth';
import { StyledDataBox, WrapperElement } from './AccountInformation.styles';

const AccountInformation = () => {
  const { currentUser, handleSignOut } = useAuth();

  return (
    <WrapperElement>
      <h3>Account information</h3>
      <div>
        <h4>Name</h4>
        <StyledDataBox>
          <p>{currentUser?.displayName}</p>
        </StyledDataBox>
      </div>
      <div>
        <h4>Email</h4>
        <StyledDataBox>
          <p>{currentUser?.email}</p>
        </StyledDataBox>
      </div>
      <div>
        <h4>Password</h4>
        <StyledDataBox>
          <p>*********</p>
        </StyledDataBox>
      </div>
      <button onClick={handleSignOut}>Sign out</button>
    </WrapperElement>
  );
};

export default AccountInformation;
