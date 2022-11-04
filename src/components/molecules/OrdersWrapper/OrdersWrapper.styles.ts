import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const StyledOrder = styled.div`
  color: ${({ theme }) => theme.color.black};
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.inputBorder};

  ${({ theme }) => theme.mq.tablet} {
    display: grid;
    grid-template-columns: 30% 70%;
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const OrderProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
  padding: 10px;

  div {
    text-align: center;

    img {
      border-radius: 5px;
      width: 75px;
    }

    h5 {
      font-size: ${({ theme }) => theme.font.size.mediumText};
    }

    p {
      font-size: ${({ theme }) => theme.font.size.smallText};
      color: ${({ theme }) => theme.color.darkGray};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 15px;
    gap: 15px;
  }
`;

export const OrderInforamtion = styled.div`
  background-color: ${({ theme }) => theme.color.lightGray};
  padding: 10px;
  text-align: center;

  h4 {
    text-transform: uppercase;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
  }
`;

export const StyledPrice = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-top: 10px;
`;
