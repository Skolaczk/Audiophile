import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import { Link } from 'react-router-dom';
import { StyledSignInTemplate, StyledParagraph, Container } from './SignTemplate.styles';
import { FC } from 'react';
import { ChildrenType } from 'types';
import SignFormContent from 'components/molecules/SignFormContent/SignFormContent';

type PropsType = {
  isSignIn?: boolean;
};

const SignTemplate: FC<ChildrenType & PropsType> = ({ children, isSignIn }) => {
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
