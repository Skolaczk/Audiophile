import styled from 'styled-components';

export const StyledCategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 75px 25px 35px;
  text-transform: uppercase;
  gap: 60px;

  div {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.lightGray};
    text-align: center;
    padding: 80px 20px 20px;
    position: relative;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 15px;
  }

  p {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.font.size.smallText};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    svg {
      position: relative;
      top: 1px;
      left: 2px;
    }
  }

  img {
    width: 125px;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
  }

  * {
    text-decoration: none;
  }

  ${({ theme }) => theme.mq.hugePhone} {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
`;
