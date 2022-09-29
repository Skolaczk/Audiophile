import styled from 'styled-components';

export const StyledForm = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 25px;
  border-radius: 10px;

  h2 {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  h4 {
    color: ${({ theme }) => theme.color.orange};
    font-size: ${({ theme }) => theme.font.size.smallText};
    text-transform: uppercase;
    letter-spacing: 0.0581rem;
    margin: 30px 0 15px;
  }
`;

export const RadioInputBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.inputBorder};
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 15px;

  label {
    order: 1;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.mediumText};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
