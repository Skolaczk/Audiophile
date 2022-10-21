import CategoryListItem from 'components/molecules/CategoryListItem/CategoryListItem';
import Earphones from 'images/shared/desktop/image-earphones.png';
import Headphones from 'images/shared/desktop/image-headphones.png';
import Speakers from 'images/shared/desktop/image-speakers.png';
import { StyledCategoryList } from './CategoryList.styles';

const CategoryList = () => {
  return (
    <StyledCategoryList>
      <CategoryListItem imageUrl={Earphones} name='earphones' />
      <CategoryListItem imageUrl={Headphones} name='headphones' />
      <CategoryListItem imageUrl={Speakers} name='speakers' />
    </StyledCategoryList>
  );
};

export default CategoryList;
