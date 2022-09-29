import { FC } from 'react';
import { StyledTitleBox } from './TitleBox.styles';

type CategoryType = {
  category: string | undefined;
};

const TitleBox: FC<CategoryType> = ({ category }) => {
  return (
    <StyledTitleBox>
      <h1>{category}</h1>
    </StyledTitleBox>
  );
};

export default TitleBox;
