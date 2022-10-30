import styled from 'styled-components';
import { ReactComponent as Success } from 'assets/icons/success.svg';
import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whiteSmoke};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 25px;
`;

export const SuccessWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 25px;
  text-align: center;
  border-radius: 5px;

  svg {
    fill: ${({ theme }) => theme.color.green};
    width: 125px;
  }

  h2 {
    color: ${({ theme }) => theme.color.green};
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    margin: 20px 0 5px;
  }

  p {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.font.size.largeText};
  }
`;

const SuccessTemplate = () => {
  return (
    <Background>
      <SuccessWrapper>
        <GoBackLink location='/' />
        <Success />
        <h2>Success</h2>
        <p>We received your purchase request. We will be in touch shortly!</p>
      </SuccessWrapper>
    </Background>
  );
};

export default SuccessTemplate;
