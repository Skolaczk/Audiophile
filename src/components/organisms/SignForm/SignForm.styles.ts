import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.color.white};
  padding: 20px;
  border-radius: 5px;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
    padding: 30px;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.orange};
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  padding: 15px 25px;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-top: 10px;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
`;

export const StyledError = styled.p`
  color: ${({ theme }) => theme.color.red};
  margin-top: 10px;
  font-size: ${({ theme }) => theme.font.size.largeText};
`;
