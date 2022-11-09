import styled from 'styled-components';

export const StyledCategoryListItem = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.lightGray};
  text-align: center;
  padding: 80px 20px 20px;
  position: relative;

  h3 {
    font-size: ${({ theme }) => theme.font.size.largeText};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 15px;
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
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

  &:hover {
    p {
      color: ${({ theme }) => theme.color.orange};
    }
  }
`;
