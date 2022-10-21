import { FC } from 'react';
import { TitleType } from 'types';
import { StyledTitleBox } from './TitleBox.styles';

const TitleBox: FC<TitleType> = ({ title }) => {
  return (
    <StyledTitleBox>
      <h1>{title}</h1>
    </StyledTitleBox>
  );
};

export default TitleBox;
