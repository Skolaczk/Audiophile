import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  display: inline-block;
  border: none;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 14px 32px;
  font-size: ${({ theme }) => theme.font.size.smallText};
  text-transform: uppercase;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
`;
