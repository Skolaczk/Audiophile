import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import { Link } from 'react-router-dom';
import { StyledSignInTemplate, StyledParagraph, Container } from './SignTemplate.styles';
import { FC } from 'react';
import { ChildrenType, IsSignInType } from 'types';
import SignFormContent from 'components/molecules/SignFormContent/SignFormContent';

const SignTemplate: FC<ChildrenType & IsSignInType> = ({ children, isSignIn }) => {
  return (
    <StyledSignInTemplate>
      <ViewWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <GoBackLink location='/' />
        <Container>
          {children}
          <SignFormContent isSignIn={isSignIn} />
        </Container>
        <StyledParagraph>Copyright 2022. All Rights Reserved</StyledParagraph>
      </ViewWrapper>
    </StyledSignInTemplate>
  );
};

export default SignTemplate;
