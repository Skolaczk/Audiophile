import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg';
import { StyledCategoryListItem } from './CategoryListItem.styles';

export type PropsType = {
  imageUrl: string;
  name: string;
};

const CategoryListItem: FC<PropsType> = ({ imageUrl, name }) => {
  return (
    <Link to={`/category/${name}`}>
      <StyledCategoryListItem>
        <img src={imageUrl} alt={`${name} image`} />
        <h3>{name}</h3>
        <p>
          shop <ArrowRightIcon />
        </p>
      </StyledCategoryListItem>
    </Link>
  );
};

export default CategoryListItem;
