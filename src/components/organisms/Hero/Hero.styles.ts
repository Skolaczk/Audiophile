import styled from 'styled-components';
import { HeroType } from 'types';

export const StyledHero = styled.div<HeroType>`
  text-align: center;
  background-color: ${({ theme }) => theme.color.black};
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding: 75px 25px;
    background: url(${({ heroImage }) => heroImage}) center/contain no-repeat;

    *:not(p) {
      text-transform: uppercase;
    }
  }

  h2 {
    color: ${({ theme }) => theme.color.lightBlack};
    font-size: ${({ theme }) => theme.font.size.mediumText};
    letter-spacing: ${({ theme }) => theme.letterSpacing.big};
  }

  h1 {
    font-size: clamp(36px, 8vw, 56px);
    color: ${({ theme }) => theme.color.white};
    margin: 15px 0 25px;
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  }

  p {
    color: ${({ theme }) => theme.color.lightBlack};
    font-size: ${({ theme }) => theme.font.size.largeText};
    line-height: ${({ theme }) => theme.lineHeight};
    margin-bottom: 40px;
  }

  ${({ theme }) => theme.mq.desktop} {
    background: url(${({ heroImageDesktop }) => heroImageDesktop}) no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.color.black};
    justify-content: flex-start;
    padding: 25px;
    height: 700px;

    div {
      background-image: none;
      text-align: left;
      padding: 0;
      width: 1200px;
      margin: 0 auto;

      h1,
      p {
        max-width: 450px;
      }
    }
  }
`;
