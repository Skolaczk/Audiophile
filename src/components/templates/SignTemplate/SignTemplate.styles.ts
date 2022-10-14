import styled from 'styled-components';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import { Link } from 'react-router-dom';

export const Foo = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    gap: 50px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 10px 50px;
    gap: 100px;
  }
`;

export const StyledSignInTemplate = styled.div`
  background-color: ${({ theme }) => theme.color.whiteSmoke};
  min-height: 100vh;
  padding: 25px;

  path {
    fill: ${({ theme }) => theme.color.black};
  }

  ${ViewWrapper} {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  padding: 30px 20px;

  h3 {
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    margin-bottom: 25px;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 30px 0;

    h3 {
      text-align: left;
    }
  }
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.orange};
  text-decoration: none;
  color: ${({ theme }) => theme.color.orange};
  display: block;
  padding: 10px;
`;

export const Box = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    margin-bottom: 20px;
    text-align: left;
  }

  ul {
    list-style: none;
    text-align: left;
  }

  li {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.largeText};

    svg {
      height: 12px;
      margin-right: 5px;
    }

    path {
      fill: ${({ theme }) => theme.color.orange};
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.font.size.largeText};
  position: relative;
  margin-top: 40px;
  padding: 10px 0;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.darkGray};
    position: absolute;
    top: 0;
    left: 0;
  }
`;
