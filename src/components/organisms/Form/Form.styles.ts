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

export const InputsWrapper = styled.div`
  ${({ theme }) => theme.mq.hugePhone} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 20px;
  }
`;

export const SpinnerOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.darkGray};
  z-index: 1;
`;
