import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import MainTemplate from '../MainTemplate/MainTemplate';
import Form from 'components/organisms/Form/Form';
import SummaryWrapper from 'components/molecules/SummaryWrapper/SummaryWrapper';
import { Background, CheckoutWrapper } from './CheckoutTemplate.styles';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutTemplate = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
  }, [currentUser, navigate]);

  return (
    <MainTemplate>
      <Background>
        <ViewWrapper>
          <GoBackLink />
          <CheckoutWrapper>
            <Form />
            <SummaryWrapper />
          </CheckoutWrapper>
        </ViewWrapper>
      </Background>
    </MainTemplate>
  );
};

export default CheckoutTemplate;
