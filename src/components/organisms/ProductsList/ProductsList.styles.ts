import styled from 'styled-components';

export const StyledProductsList = styled.div`
  padding: 25px 25px;
  display: grid;
  gap: 75px;
`;

export const StyledProductsListItem = styled.div`
  text-align: center;

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 25px;
  }

  h4 {
    color: ${({ theme }) => theme.color.orange};
    letter-spacing: ${({ theme }) => theme.letterSpacing.big};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.mediumText};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-bottom: 25px;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    color: ${({ theme }) => theme.color.black};
  }

  p {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.font.size.largeText};
    line-height: ${({ theme }) => theme.lineHeight};
    margin: 25px 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    align-items: center;
    gap: 50px;
    text-align: left;

    div,
    picture {
      width: 50%;
    }

    img {
      margin: 0;
    }

    &:nth-child(even) {
      picture {
        order: 2;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: 100px;
  }
`;
