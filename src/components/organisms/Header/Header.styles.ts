import styled from 'styled-components';

type IsOpenProps = {
  readonly isOpen: boolean;
};

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.granit};

  button {
    border: none;
    background-color: transparent;
  }
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
`;
