import MainTemplate from '../MainTemplate/MainTemplate';
import { useParams } from 'react-router-dom';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import Card from 'components/molecules/Card/Card';
import ProductsList from 'components/organisms/ProductsList/ProductsList';
import TitleBox from 'components/atoms/TitleBox/TitleBox';

const CategoryTemplate = () => {
  const { category } = useParams();

  return (
    <MainTemplate>
      <TitleBox category={category} />
      <ProductsList category={category} />
      <CategoryList />
      <Card />
    </MainTemplate>
  );
};

export default CategoryTemplate;
