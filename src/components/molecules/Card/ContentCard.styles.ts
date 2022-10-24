import styled from 'styled-components';

export const StyledContentCard = styled.div`
  padding: 35px 25px;
  text-align: center;

  img {
    border-radius: 5px;
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.size.mediumHeading};
    margin: 25px 0;

    span {
      color: ${({ theme }) => theme.color.orange};
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.darkGray};
    line-height: ${({ theme }) => theme.lineHeight};
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    align-items: center;
    gap: 50px;

    picture {
      order: 1;
      width: 50%;
    }

    div {
      width: 50%;
      text-align: left;
    }

    h2 {
      margin-top: 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    h2 {
      font-size: ${({ theme }) => theme.font.size.largeHeading};
      margin-bottom: 35px;
    }
  }
`;
