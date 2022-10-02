import Card from 'components/molecules/Card/Card';
import CardsGrid from 'components/organisms/CardsGrid/CardsGrid';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import Hero from 'components/organisms/Hero/Hero';
import MainTemplate from '../MainTemplate/MainTemplate';

const Homepage = () => {
  return (
    <MainTemplate>
      <Hero />
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <CategoryList />
        <CardsGrid />
        <Card />
      </div>
    </MainTemplate>
  );
};

export default Homepage;
