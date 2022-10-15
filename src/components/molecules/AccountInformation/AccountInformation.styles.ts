import styled from 'styled-components';

export const WrapperElement = styled.div`
  h3 {
    margin: 25px 0 15px;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.largeText};
  }

  button {
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
    border: none;
    width: 100%;
    padding: 15px;
    margin-top: 15px;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

export const StyledDataBox = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.inputBorder};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
`;
