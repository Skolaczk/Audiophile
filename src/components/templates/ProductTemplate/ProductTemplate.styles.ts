import styled from 'styled-components';

export const ProductItemWrapper = styled.div`
  padding: 35px 25px;

  img {
    width: 100%;
    border-radius: 5px;
  }

  h3 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    margin-top: 50px;
  }
`;
