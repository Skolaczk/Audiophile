import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.black};
  text-align: center;
  padding: 50px 25px 30px;

  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.smallText};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin: 50px 0;
    gap: 25px;
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  }

  p {
    color: ${({ theme }) => theme.color.lightBlack};
    font-size: ${({ theme }) => theme.font.size.largeText};
    margin-bottom: 50px;
    line-height: ${({ theme }) => theme.lineHeight};

    ${({ theme }) => theme.mq.tablet} {
      margin-top: 50px;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    transition: color 0.25s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.color.orange};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;

    ul {
      flex-direction: row;
      margin: 0;
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }
  }
`;

export const CenterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background-color: ${({ theme }) => theme.color.orange};
  }

  ${({ theme }) => theme.mq.tablet} {
    &::after {
      left: 0;
      transform: none;
    }
  }
`;
