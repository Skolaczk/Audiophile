import styled from 'styled-components';

export const WrapperElement = styled.div`
  h3 {
    margin: 25px 0 15px;
  }

  button {
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
    border: none;
    width: 100%;
    padding: 15px;
    margin-top: 15px;
    transition: background-color 0.25s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.color.lightOrange};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;
