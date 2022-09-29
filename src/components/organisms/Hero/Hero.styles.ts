import styled from 'styled-components';

type HeroProps = {
  readonly heroImage: string;
};

export const StyledHero = styled.div<HeroProps>`
  text-align: center;
  background-color: ${({ theme }) => theme.color.black};
  height: calc(100vh - 81px);
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
    letter-spacing: 0.625rem;
  }

  h1 {
    font-size: clamp(36px, 8vw, 56px);
    color: ${({ theme }) => theme.color.white};
    margin: 15px 0 25px;
  }

  p {
    color: ${({ theme }) => theme.color.lightBlack};
    font-size: ${({ theme }) => theme.font.size.largeText};
    line-height: 1.7;
    margin-bottom: 40px;
  }
`;
