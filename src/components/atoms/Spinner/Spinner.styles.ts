import styled, { css, keyframes } from 'styled-components';

type IsLoadingType = {
  isLoading: boolean;
};

const rotateSpinner = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div<IsLoadingType>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;

  svg {
    width: 30px;
    animation: ${({ isLoading }) =>
      isLoading
        ? css`
            ${rotateSpinner} 1s infinite
          `
        : ''};
  }
`;
