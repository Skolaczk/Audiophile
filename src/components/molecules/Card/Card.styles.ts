import styled from 'styled-components';

export const StyledCard = styled.div`
  padding: 35px 25px;
  text-align: center;

  img {
    border-radius: 5px;
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    margin: 25px 0;

    span {
      color: ${({ theme }) => theme.color.orange};
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.size.mediumText};
    color: ${({ theme }) => theme.color.darkGray};
    line-height: 1.7;
  }
`;
