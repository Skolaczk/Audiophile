import { FC } from 'react';
import { StyledTitleBox } from './TitleBox.styles';

type PropsType = {
  title: string | undefined;
};

const TitleBox: FC<PropsType> = ({ title }) => {
  return (
    <StyledTitleBox>
      <h1>{title}</h1>
    </StyledTitleBox>
  );
};

export default TitleBox;
