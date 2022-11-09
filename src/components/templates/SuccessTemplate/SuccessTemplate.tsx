import { ReactComponent as Success } from 'assets/icons/success.svg';
import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import { useSuccess } from 'hooks/useSuccess';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Background, SuccessWrapper } from './SuccessTemplate.styles';

const SuccessTemplate = () => {
  const navigate = useNavigate();
  const { isBlocked } = useSuccess();

  useEffect(() => {
    if (!isBlocked) navigate('/');
  }, []);

  return (
    <Background>
      <SuccessWrapper>
        <GoBackLink location='/' />
        <Success />
        <h2>Success</h2>
        <p>
          We received your purchase request. You can see this order in{' '}
          <Link to='/account'>your account</Link>. We will be in touch shortly!
        </p>
      </SuccessWrapper>
    </Background>
  );
};

export default SuccessTemplate;
