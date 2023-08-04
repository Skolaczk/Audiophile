import { ReactComponent as Check } from 'assets/icons/check.svg';
import { FC } from 'react';
import { Box, StyledLink, Wrapper } from './SignFormContent.styles';

type PropsType = {
  isSignIn?: boolean;
};

const SignFormContent: FC<PropsType> = ({ isSignIn }) => {
  return (
    <div>
      <Wrapper>
        <h3>
          {isSignIn
            ? 'You dont have an audiophile account?'
            : 'You already have an audiophile account?'}
        </h3>
        <StyledLink to={isSignIn ? '/sign-up' : '/sign-in'}>
          {isSignIn ? 'Create account' : 'Sign in'}
        </StyledLink>
      </Wrapper>
      <Box>
        <h3>Why is it worth having an account with Audiophile</h3>
        <ul>
          <li>
            <Check /> order faster
          </li>
          <li>
            <Check /> check previous orders
          </li>
          <li>
            <Check /> track order status
          </li>
        </ul>
      </Box>
    </div>
  );
};

export default SignFormContent;
