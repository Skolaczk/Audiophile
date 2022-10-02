import styled from 'styled-components';

export const StyledTitleBox = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  padding: 30px;

  h1 {
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.125rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 100px;
    margin-bottom: 50px;
  }
`;
