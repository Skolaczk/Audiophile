import Card from 'components/molecules/Card/Card';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import { useParams } from 'react-router-dom';
import MainTemplate from '../MainTemplate/MainTemplate';
import { useState } from 'react';
import data from '../../../data/products';
import ProductHero from 'components/organisms/ProductHero/ProductHero';
import ProductContent from 'components/molecules/ProductContent/ProductContent';
import ProductGallery from 'components/molecules/ProductGallery/ProductGallery';
import OthersProductsList from 'components/organisms/OthersProductsList/OthersProductsList';
import { ProductItemWrapper } from './ProductTemplate.styles';
import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';

const Product = () => {
  const { slug } = useParams();
  const [product] = useState(data.find((product) => product.slug === slug));

  return (
    <MainTemplate>
      {product ? (
        <ProductItemWrapper>
          <GoBackLink />
          <ProductHero {...product} />
          <ProductContent features={product.features} includedItems={product.includedItems} />
          <ProductGallery gallery={product.gallery} />
          <OthersProductsList others={product.others} />
        </ProductItemWrapper>
      ) : (
        <p>No items</p>
      )}
      <CategoryList />
      <Card />
    </MainTemplate>
  );
};

export default Product;
