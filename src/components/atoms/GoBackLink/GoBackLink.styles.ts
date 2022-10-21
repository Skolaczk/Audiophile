import styled from 'styled-components';

export const StyledGoBackLink = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.darkGray};
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
