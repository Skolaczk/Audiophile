import styled from 'styled-components';
import { FirstCardType, SecondCardType } from 'types';

export const FirstCard = styled.div<FirstCardType>`
  background-color: ${({ theme }) => theme.color.orange};
  background-image: url(${({ patternCircles }) => patternCircles});
  background-size: cover;
  background-position: 50% -8.125rem;
  background-repeat: no-repeat;
  text-align: center;
  padding: 35px 25px;
  max-width: 1150px;

  img {
    width: 170px;
  }

  h2 {
    color: ${({ theme }) => theme.color.white};
    margin-top: 15px;
    font-size: clamp(36px, 8vw, 56px);
  }

  p {
    color: ${({ theme }) => theme.color.lightBlack};
    font-size: ${({ theme }) => theme.font.size.mediumText};
    line-height: ${({ theme }) => theme.lineHeight};
    margin: 25px 0 50px;
  }

  a {
    background-color: ${({ theme }) => theme.color.black};

    &:hover {
      background-color: ${({ theme }) => theme.color.hoverBlack};
    }
  }
`;

export const SecondCard = styled.div<SecondCardType>`
  background-image: url(${({ zx7Speaker }) => zx7Speaker});
  background-position: center;
  background-size: cover;
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

    &:hover {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 100px;
  }
`;

export const ThirdCard = styled.div`
  background-color: ${({ theme }) => theme.color.lightGray};
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

    &:hover {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    }
  }

  ${({ theme }) => theme.mq.hugePhone} {
    padding: 25px;
    width: 60%;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 75px;
  }
`;

export const StyledCardsGrid = styled.div`
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

  ${({ theme }) => theme.mq.desktop} {
    div:not(:last-child) {
      margin-bottom: 35px;
    }
  }
`;

export const Wrapper = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 25px;
  }

  ${({ theme }) => theme.mq.hugePhone} {
    display: flex;
    gap: 25px;

    img {
      margin-bottom: 0;
      width: 40%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: 35px;
  }
`;
