import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.whiteSmoke};
  padding: 25px;
`;

export const CheckoutWrapper = styled(ViewWrapper)`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }
`;
