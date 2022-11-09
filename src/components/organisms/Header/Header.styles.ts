import styled from 'styled-components';
import { CountType, IsOpenType } from 'types';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  z-index: 2;
  padding: 0 25px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    fill: white;
    height: 20px;
  }
`;

export const IconButton = styled.button<CountType>`
  border: none;
  background-color: transparent;
  position: relative;

  &:after {
    position: absolute;
    top: -9px;
    right: -9px;
    content: '${({ count }) => count}';
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.orange};
    border-radius: 50%;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.font.size.smallText};
  }

  svg {
    fill: white;
    height: 25px;
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

export const HamburgerButton = styled.button<IsOpenType>`
  z-index: ${({ isOpen }) => (isOpen ? '2' : '0')};
  width: 23px;
  height: 23px;
  background-color: transparent;
  border: none;

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

export const StyledNavigation = styled.nav<IsOpenType>`
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

export const Background = styled.div<IsOpenType>`
  ${({ theme }) => theme.mq.hugePhone} {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    left: 0;
    background-color: ${({ theme }) => theme.color.darkGray};
    height: calc(100vh - 81px);
    width: 100%;
    position: absolute;
    top: 81px;
  }
`;
