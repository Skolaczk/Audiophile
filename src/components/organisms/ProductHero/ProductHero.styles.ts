import styled from 'styled-components';

export const StyledPrice = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.smallHeading};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
`;

export const StyledBoxCounter = styled.div`
  display: flex;

  button {
    border: none;
    padding: 15px 15px;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.color.orange};
      background-color: ${({ theme }) => theme.color.gray};
    }
  }

  div {
    padding: 15px 10px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  * {
    background-color: ${({ theme }) => theme.color.lightGray};
    font-size: ${({ theme }) => theme.font.size.smallText};
  }
`;

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 14px 32px;
  font-size: ${({ theme }) => theme.font.size.smallText};
  text-transform: uppercase;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
`;

export const StyledContent = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.font.size.largeText};
  line-height: ${({ theme }) => theme.lineHeight};
  margin: 25px 0;
`;

export const StyledProductHero = styled.div`
  ${({ theme }) => theme.mq.hugePhone} {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: 100px;

    h2 {
      font-size: ${({ theme }) => theme.font.size.largeHeading};
    }
  }
`;
