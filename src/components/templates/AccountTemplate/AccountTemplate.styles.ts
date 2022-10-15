import styled from 'styled-components';

export const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.mediumHeading};
  text-align: center;
  margin-top: 15px;
`;

export const Wrapper = styled.div`
  padding: 0 25px;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    gap: 50px;
  }
`;
