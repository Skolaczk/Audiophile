import styled from 'styled-components';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';

export const Container = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    gap: 50px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 10px 50px;
    gap: 100px;
  }
`;

export const StyledSignInTemplate = styled.div`
  background-color: ${({ theme }) => theme.color.whiteSmoke};
  min-height: 100vh;
  padding: 25px;

  path {
    fill: ${({ theme }) => theme.color.black};
  }

  ${ViewWrapper} {
    text-align: center;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.font.size.largeText};
  position: relative;
  margin-top: 40px;
  padding: 10px 0;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.darkGray};
    position: absolute;
    top: 0;
    left: 0;
  }
`;
