import styled from 'styled-components';

export const ProductItemWrapper = styled.div`
  padding: 35px 25px;

  img {
    width: 100%;
    border-radius: 5px;
  }

  h5 {
    color: ${({ theme }) => theme.color.orange};
    letter-spacing: 0.625rem;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.mediumText};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-top: 25px;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    color: ${({ theme }) => theme.color.black};
    line-height: 1.33;
    margin-top: 25px;
  }

  h3 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
    font-size: 24px;
    margin-top: 50px;
  }
`;
