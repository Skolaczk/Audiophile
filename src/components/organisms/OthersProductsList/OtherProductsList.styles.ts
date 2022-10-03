import styled from 'styled-components';

export const StyledOtherProduct = styled.div`
  text-align: center;

  h4 {
    color: ${({ theme }) => theme.color.black};
    font-size: 24px;
    margin: 15px 0;
  }

  &:not(:last-child) {
    margin-bottom: 35px;
  }
`;

export const CenterHeading = styled.h3`
  text-align: center;
  margin-bottom: 25px;
`;

export const ProductsWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    gap: 25px;
  }
`;
