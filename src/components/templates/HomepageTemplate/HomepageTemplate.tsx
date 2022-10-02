import Card from 'components/molecules/Card/Card';
import CardsGrid from 'components/organisms/CardsGrid/CardsGrid';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import Hero from 'components/organisms/Hero/Hero';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import MainTemplate from '../MainTemplate/MainTemplate';

const Homepage = () => {
  return (
    <MainTemplate>
      <Hero />
      <ViewWrapper>
        <CategoryList />
        <CardsGrid />
        <Card />
      </ViewWrapper>
    </MainTemplate>
  );
};

export default Homepage;
