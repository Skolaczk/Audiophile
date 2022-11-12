import styled from 'styled-components';

export const StyledContent = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.font.size.largeText};
  line-height: ${({ theme }) => theme.lineHeight};
  margin: 25px 0;
`;

export const ProductCompositionWrapper = styled.div`
  margin-top: 25px;

  div {
    display: flex;
  }

  span {
    width: 30px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.orange};
    font-size: ${({ theme }) => theme.font.size.largeText};
  }

  p {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.darkGray};
  }

  span:not(:last-child),
  p:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledProductContent = styled.div`
  h3 {
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
    font-size: ${({ theme }) => theme.font.size.smallHeading};
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    gap: 50px;
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: 100px;
  }
`;
export const FeaturesWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    width: 60%;
  }
`;
