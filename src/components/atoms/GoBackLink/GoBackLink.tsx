import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const StyledGoBackLink = styled(Link)`
  color: ${({ theme }) => theme.color.darkGray};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.largeText};
  margin-bottom: 15px;
  display: block;
`;

const GoBackLink = () => {
  const { category } = useParams();

  return <StyledGoBackLink to={`/${category}`}>Go Back</StyledGoBackLink>;
};

export default GoBackLink;
