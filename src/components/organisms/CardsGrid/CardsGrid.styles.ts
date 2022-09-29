import styled from 'styled-components';

type CardsGridType = {
  readonly patternCircles: string;
  readonly zx7Speaker: string;
};

export const StyledCardsGrid = styled.div<CardsGridType>`
  padding: 35px 25px;

  div {
    border-radius: 5px;
  }

  div:not(:last-child) {
    margin-bottom: 25px;
  }

  h2 {
    text-transform: uppercase;
  }

  div:first-child {
    background-color: ${({ theme }) => theme.color.orange};
    background-image: url(${({ patternCircles }) => patternCircles});
    background-size: cover;
    background-position: 50% -8.125rem;
    background-repeat: no-repeat;
    text-align: center;
    padding: 35px 25px;

    img {
      width: 170px;
    }

    h2 {
      color: ${({ theme }) => theme.color.white};
      margin-top: 15px;
      line-height: 1;
      font-size: clamp(36px, 8vw, 56px);
    }

    p {
      color: ${({ theme }) => theme.color.lightBlack};
      font-size: ${({ theme }) => theme.font.size.mediumText};
      line-height: 1.7;
      margin: 25px 0 50px;
    }

    a {
      background-color: ${({ theme }) => theme.color.black};
    }
  }

  div:nth-child(2),
  div:last-child {
    padding: 50px 20px;

    h2 {
      font-size: ${({ theme }) => theme.font.size.mediumHeading};
      margin-bottom: 25px;
      color: ${({ theme }) => theme.color.black};
    }

    a {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.black};
    }
  }

  div:nth-child(2) {
    background-image: url(${({ zx7Speaker }) => zx7Speaker});
    background-position: center;
    background-size: cover;
  }

  div:nth-child(3) {
    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  div:last-child {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;
