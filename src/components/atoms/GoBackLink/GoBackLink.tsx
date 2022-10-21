import { useNavigate } from 'react-router-dom';
import { StyledGoBackLink } from './GoBackLink.styles';

const GoBackLink = () => {
  const navigate = useNavigate();

  return <StyledGoBackLink onClick={() => navigate(-1)}>Go Back</StyledGoBackLink>;
};

export default GoBackLink;
