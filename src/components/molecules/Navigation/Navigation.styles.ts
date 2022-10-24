import styled from 'styled-components';

const activeClassName = 'active';
export const StyledNavigation = styled.nav`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;

    ul {
      display: flex;
      gap: 25px;
    }

    li {
      list-style: none;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.font.size.mediumText};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      letter-spacing: ${({ theme }) => theme.letterSpacing.small};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.white};
      transition: color 0.25s ease-in-out;

      &.${activeClassName} {
        color: ${({ theme }) => theme.color.orange};
      }

      &:hover {
        color: ${({ theme }) => theme.color.orange};
      }
    }
  }
`;
