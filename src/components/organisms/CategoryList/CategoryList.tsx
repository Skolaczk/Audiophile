import CategoryListItem from 'components/molecules/CategoryListItem/CategoryListItem';
import Earphones from 'images/desktop/image-earphones.png';
import Headphones from 'images/desktop/image-headphones.png';
import Speakers from 'images/desktop/image-speakers.png';
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
