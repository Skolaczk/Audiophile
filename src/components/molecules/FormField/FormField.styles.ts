import styled from 'styled-components';

type InputType = {
  isBig?: boolean;
  isError: string | false | undefined;
};

export const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: ${({ theme }) => theme.font.size.verySmallText};
  }
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.font.size.verySmallText};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const InputBox = styled.div<InputType>`
  margin-bottom: 20px;
  grid-column: ${({ isBig }) => (isBig ? '1 / 3' : '')};

  input {
    margin-top: 10px;
    border: 1px solid ${({ theme }) => theme.color.inputBorder};
    border-radius: 5px;
    padding: 15px;
    width: 100%;

    &:focus {
      outline-color: ${({ theme }) => theme.color.orange};
    }
  }

  label,
  p {
    color: ${({ isError, theme }) => (isError ? theme.color.red : null)};
  }

  input {
    border-color: ${({ isError, theme }) => (isError ? theme.color.red : null)};
  }
`;
