import styled from 'styled-components';

export const StyledPrice = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.smallHeading};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export const StyledBoxCounter = styled.div`
  display: flex;

  button {
    border: none;
    padding: 15px 13px;
  }

  div {
    padding: 15px 10px;
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
`;

export const StyledContent = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.font.size.largeText};
  line-height: 1.66;
  margin: 25px 0;
`;
