import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledGoBackLink } from './GoBackLink.styles';

type PropsType = {
  location?: string;
};

const GoBackLink: FC<PropsType> = ({ location }) => {
  const navigate = useNavigate();

  return (
    <StyledGoBackLink onClick={location ? () => navigate(location) : () => navigate(-1)}>
      Go Back
    </StyledGoBackLink>
  );
};

export default GoBackLink;
