import { ReactComponent as Check } from 'assets/icons/check.svg';
import { FC } from 'react';
import { IsSignInType } from 'types';
import { Box, StyledLink, Wrapper } from './SignFormContent.styles';

const SignFormContent: FC<IsSignInType> = ({ isSignIn }) => {
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
