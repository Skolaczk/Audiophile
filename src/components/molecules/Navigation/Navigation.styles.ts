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
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.white};

      &.${activeClassName} {
        color: ${({ theme }) => theme.color.orange};
      }
    }
  }
`;
