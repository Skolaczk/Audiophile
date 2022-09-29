import Card from 'components/molecules/Card/Card';
import CardsGrid from 'components/organisms/CardsGrid/CardsGrid';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import Hero from 'components/organisms/Hero/Hero';
import MainTemplate from '../MainTemplate/MainTemplate';

const Homepage = () => {
  return (
    <MainTemplate>
      <Hero />
      <CategoryList />
      <CardsGrid />
      <Card />
    </MainTemplate>
  );
};

export default Homepage;
