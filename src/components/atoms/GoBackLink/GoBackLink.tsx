import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const StyledGoBackLink = styled(Link)`
  color: ${({ theme }) => theme.color.darkGray};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.largeText};
  margin-bottom: 15px;
  width: 56px;
  display: block;
  position: relative;

  &:hover {
    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      background-color: ${({ theme }) => theme.color.darkGray};
      height: 1px;
      width: 100%;
    }
  }
`;

const GoBackLink = () => {
  const { category } = useParams();

  return <StyledGoBackLink to={`/${category}`}>Go Back</StyledGoBackLink>;
};

export default GoBackLink;
