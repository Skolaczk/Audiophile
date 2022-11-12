import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.color.white};
  padding: 25px;
  border-radius: 5px;

  h2 {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    text-transform: uppercase;
    margin-bottom: 30px;
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  }

  h4 {
    color: ${({ theme }) => theme.color.orange};
    font-size: ${({ theme }) => theme.font.size.smallText};
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    margin: 30px 0 15px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    padding: 50px;
  }
`;

export const RadioInputBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.inputBorder};
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  display: flex;
  gap: 10px;
  margin: 15px 0 20px;

  label {
    order: 1;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.mediumText};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.font.size.verySmallText};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const InputsWrapper = styled.div`
  ${({ theme }) => theme.mq.hugePhone} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 20px;
  }
`;

export const StyledInformation = styled.p`
  grid-column: 1 / 3;
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.font.size.largeText};
  line-height: ${({ theme }) => theme.lineHeight};
`;
