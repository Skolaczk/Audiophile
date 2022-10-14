import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Check } from 'assets/icons/check.svg';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import { Link } from 'react-router-dom';
import {
  StyledSignInTemplate,
  Wrapper,
  Box,
  StyledParagraph,
  Foo,
  StyledLink,
} from './SignTemplate.styles';
import { FC } from 'react';

type ChildrenType = {
  children: React.ReactNode;
  isSignIn?: boolean;
};

const SignTemplate: FC<ChildrenType> = ({ children, isSignIn }) => {
  return (
    <StyledSignInTemplate>
      <ViewWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <GoBackLink />
        <Foo>
          {children}
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
        </Foo>
        <StyledParagraph>Copyright 2022. All Rights Reserved</StyledParagraph>
      </ViewWrapper>
    </StyledSignInTemplate>
  );
};

export default SignTemplate;
