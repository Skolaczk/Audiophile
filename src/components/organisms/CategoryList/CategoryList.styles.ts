import styled from 'styled-components';

export const StyledCategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 75px 25px 35px;
  text-transform: uppercase;
  gap: 60px;

  * {
    text-decoration: none;
  }

  ${({ theme }) => theme.mq.hugePhone} {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
`;
