import styled from 'styled-components';

type IsOpenProps = {
  readonly isOpen: boolean;
};

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  z-index: 2;
  padding: 0 25px;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.granit};
  padding: 25px 0px;
`;

export const HamburgerButton = styled.button<IsOpenProps>`
  z-index: 2;
  width: 23px;
  height: 23px;

  div {
    height: 3px;
    width: 100%;
    background-color: ${({ isOpen, theme }) => (isOpen ? theme.color.black : theme.color.white)};
    transform-origin: left;
    transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out,
      background-color 0.15s ease-in-out;
  }

  div:first-child {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
  }

  div:nth-child(2) {
    margin: 5px 0;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  div:last-child {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }

  ${({ theme }) => theme.mq.hugePhone} {
    div {
      background-color: ${({ theme }) => theme.color.white};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const Navigation = styled.nav<IsOpenProps>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.hugePhone} {
    height: auto;
    left: 0;
    top: -264px;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(343px)' : 'translateY(0)')};
  }

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const Background = styled.div<IsOpenProps>`
  ${({ theme }) => theme.mq.hugePhone} {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background-color: ${({ theme }) => theme.color.darkGray};
    height: calc(100vh - 81px);
    width: 100%;
    position: absolute;
    top: 81px;
  }
`;

const activeClassName = 'active';
export const DesktopNavigation = styled.nav`
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
