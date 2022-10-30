import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBackLinkType } from 'types';
import { StyledGoBackLink } from './GoBackLink.styles';

const GoBackLink: FC<GoBackLinkType> = ({ location }) => {
  const navigate = useNavigate();

  return (
    <StyledGoBackLink onClick={location ? () => navigate(location) : () => navigate(-1)}>
      Go Back
    </StyledGoBackLink>
  );
};

export default GoBackLink;
