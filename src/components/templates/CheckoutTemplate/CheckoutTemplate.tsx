import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import MainTemplate from '../MainTemplate/MainTemplate';
import Form from 'components/organisms/Form/Form';
import SummaryWrapper from 'components/molecules/SummaryWrapper/SummaryWrapper';
import { Background } from './CheckoutTemplate.styles';

const CheckoutTemplate = () => {
  return (
    <MainTemplate>
      <Background>
        <GoBackLink />
        <Form />
        <SummaryWrapper />
      </Background>
    </MainTemplate>
  );
};

export default CheckoutTemplate;
