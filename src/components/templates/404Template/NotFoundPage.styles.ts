import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 25px;

  h2 {
    font-size: ${({ theme }) => theme.font.size.largeHeading};
    color: ${({ theme }) => theme.color.black};
  }

  p {
    color: ${({ theme }) => theme.color.darkGray};
    margin: 25px 0 15px;
  }
`;
