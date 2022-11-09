import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 30px 20px;

  h3 {
    font-size: ${({ theme }) => theme.font.size.verySmallHeading};
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
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Box = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.font.size.verySmallHeading};
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
