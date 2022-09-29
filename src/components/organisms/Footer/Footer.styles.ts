import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.black};
  text-align: center;
  padding: 50px 25px 30px;
  position: relative;

  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.white};
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.smallText};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin: 50px 0;
  }

  li:not(:last-child) {
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.color.lightBlack};
    font-size: ${({ theme }) => theme.font.size.mediumText};
    margin-bottom: 50px;
    line-height: 1.7;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    margin: 0 10px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background-color: ${({ theme }) => theme.color.orange};
  }
`;
