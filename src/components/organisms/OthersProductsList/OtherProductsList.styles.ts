import styled from 'styled-components';

export const StyledOtherProduct = styled.div`
  text-align: center;

  h4 {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.smallHeading};
    margin: 15px 0;
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  }

  &:not(:last-child) {
    margin-bottom: 35px;
  }
`;

export const CenterHeading = styled.h3`
  text-align: center;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.font.size.mediumHeading};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
`;

export const ProductsWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    gap: 35px;
  }
`;
