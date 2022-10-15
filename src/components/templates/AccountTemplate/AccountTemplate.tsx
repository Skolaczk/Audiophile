import TitleBox from 'components/atoms/TitleBox/TitleBox';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainTemplate from '../MainTemplate/MainTemplate';
import AccountInformation from 'components/molecules/AccountInformation/AccountInformation';
import OrdersWrapper from 'components/molecules/OrdersWrapper/OrdersWrapper';
import { StyledHeading, Wrapper } from './AccountTemplate.styles';

const AccountTemplate = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);
    if (!currentUser) navigate('/sign-in');
  }, [currentUser, navigate]);

  return (
    <MainTemplate>
      <TitleBox category='your account' />
      <ViewWrapper>
        <StyledHeading>Hello, {currentUser?.displayName}</StyledHeading>
        <Wrapper>
          <AccountInformation />
          <OrdersWrapper />
        </Wrapper>
        <CategoryList />
      </ViewWrapper>
    </MainTemplate>
  );
};

export default AccountTemplate;
