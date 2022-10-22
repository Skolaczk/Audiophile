import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export const overlay = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

export const StyledModal = styled(ReactModal)`
  position: absolute;
  left: 50%;
  top: 10%;
  width: 80%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  max-width: 400px;
  padding: 25px;

  h2 {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    text-transform: uppercase;
  }

  ${ButtonLink} {
    width: 100%;
    text-align: center;
    margin-top: 25px;
  }

  ${({ theme }) => theme.mq.tablet} {
    transform: none;
    left: auto;
    right: 5%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p:first-child {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.darkGray};
    text-transform: uppercase;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.largeText};
  color: ${({ theme }) => theme.color.darkGray};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    background-color: ${({ theme }) => theme.color.darkGray};
    height: 1px;
    width: 100%;
  }
`;

export const NoItemsWrapper = styled.div`
  text-align: center;

  p {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.font.size.hugeText};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 25px;
  }

  img {
    width: 96px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;

  img {
    width: 64px;
    border-radius: 5px;
  }

  div {
    display: flex;
  }
`;

export const ItemCartContent = styled.div`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;

  h3 {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.black};
  }

  p {
    font-size: ${({ theme }) => theme.font.size.mediumText};
    color: ${({ theme }) => theme.color.darkGray};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const CounterWrapper = styled.div`
  button {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.darkGray};
    background-color: ${({ theme }) => theme.color.lightGray};
    border: none;
    padding: 5px 15px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.color.orange};
      background-color: ${({ theme }) => theme.color.gray};
    }
  }

  div {
    background-color: ${({ theme }) => theme.color.lightGray};
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.smallText};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.black};
    padding: 0 5px;
  }
`;
