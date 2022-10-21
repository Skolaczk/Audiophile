import styled from 'styled-components';

export const AccountFieldBox = styled.div`
  h4 {
    margin-bottom: 10px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.largeText};
  }

  div {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.inputBorder};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
  }
`;
