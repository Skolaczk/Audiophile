import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whiteSmoke};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 25px;
`;

export const SuccessWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 25px;
  text-align: center;
  border-radius: 5px;
  max-width: 500px;

  svg {
    fill: ${({ theme }) => theme.color.green};
    width: 125px;
  }

  h2 {
    color: ${({ theme }) => theme.color.green};
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    margin: 20px 0 5px;
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  }

  p {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.font.size.largeText};
    line-height: ${({ theme }) => theme.lineHeight};
  }

  a {
    color: ${({ theme }) => theme.color.orange};
    text-decoration: none;
    margin-bottom: 15px;
    width: 56px;
    position: relative;

    &:hover {
      &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        background-color: ${({ theme }) => theme.color.orange};
        height: 1px;
        width: 100%;
      }
    }
  }
`;
