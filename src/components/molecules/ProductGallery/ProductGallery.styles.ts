import styled from 'styled-components';

export const ImagesWrapper = styled.div`
  margin-top: 50px;

  img:not(:last-child) {
    margin-bottom: 15px;
  }

  ${({ theme }) => theme.mq.hugePhone} {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 31px;
    grid-template-areas:
      'a c'
      'b c';

    img {
      object-fit: cover;
      width: 100%;
    }

    img:first-child {
      grid-column: 1;
      grid-area: a / a / a / a;
    }

    img:nth-child(2) {
      grid-area: b / b / b / b;
    }

    img:last-child {
      grid-area: c / c / c / c;
    }

    img:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
