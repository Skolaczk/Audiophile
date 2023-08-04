import styled from 'styled-components';

type IsOpenType = {
  isOpen: boolean;
};

export const StyledSuccesInforamtion = styled.div<IsOpenType>`
  z-index: 3;
  display: flex;
  position: fixed;
  top: 20px;
  width: 280px;
  left: -280px;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  transition: transform 0.25s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(300px)' : 'translateX(0)')};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.25s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.color.darkGreen};
    }

    svg {
      width: 10px;
      fill: ${({ theme }) => theme.color.white};
    }
  }

  ${({ theme }) => theme.mq.hugePhone} {
    width: 400px;
    left: -400px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(420px)' : 'translateX(0)')};
  }
`;
