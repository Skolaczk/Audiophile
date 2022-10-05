import styled from 'styled-components';

export const StyledSummaryWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: 25px;
  margin: 25px 0;

  h3 {
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    margin-bottom: 25px;
  }

  button {
    background-color: ${({ theme }) => theme.color.orange};
    border: none;
    width: 100%;
    color: ${({ theme }) => theme.color.white};
    padding: 15px 25px;
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 30%;
    margin: 0;
  }
`;

export const SummaryList = styled.div`
  margin: 25px 0;

  div:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-transform: uppercase;
  }

  p:first-child {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.font.size.largeText};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  &:last-child {
    margin-top: 20px;
  }

  &:last-child p:last-child {
    color: ${({ theme }) => theme.color.orange};
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 5px;
    margin-right: 15px;
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.black};
  }

  p {
    color: ${({ theme }) => theme.color.darkGray};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  p:first-child {
    font-size: ${({ theme }) => theme.font.size.mediumText};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.font.size.largeText};
  }

  div:first-child {
    display: flex;
    align-items: center;
  }
`;
