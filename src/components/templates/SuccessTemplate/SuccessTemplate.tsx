import { ReactComponent as Success } from 'assets/icons/success.svg';
import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Background, SuccessWrapper } from './SuccessTemplate.styles';
import { useAppDispatch } from 'hooks/useRedux';
import { removeAllProduct } from 'store';

const SuccessTemplate = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.get('success')) {
      dispatch(removeAllProduct());
    } else {
      navigate('/');
    }
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
