import Card from 'components/molecules/Card/ContentCard';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MainTemplate from '../MainTemplate/MainTemplate';
import { useEffect, useState } from 'react';
import ProductHero from 'components/organisms/ProductHero/ProductHero';
import ProductContent from 'components/molecules/ProductContent/ProductContent';
import ProductGallery from 'components/molecules/ProductGallery/ProductGallery';
import OthersProductsList from 'components/organisms/OthersProductsList/OthersProductsList';
import { ProductItemWrapper } from './ProductTemplate.styles';
import GoBackLink from 'components/atoms/GoBackLink/GoBackLink';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper.styles';
import axios from 'axios';
import Spinner from 'components/atoms/Spinner/Spinner';
import { ProductType } from 'types';

const Product = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    axios
      .get(`https://audiophile-database.herokuapp.com/products?slug=${slug}`)
      .then(({ data }) => {
        setProduct(data[0]);
        setIsLoading(false);
      });
  }, [location]);

  useEffect(() => {
    if (!isLoading && !product) navigate('/');
  }, [isLoading, product]);

  return (
    <MainTemplate>
      <ViewWrapper>
        {product && !isLoading ? (
          <ProductItemWrapper>
            <GoBackLink />
            <ProductHero {...product} />
            <ProductContent features={product.features} includedItems={product.includedItems} />
            <ProductGallery gallery={product.gallery} />
            <OthersProductsList others={product.others} />
          </ProductItemWrapper>
        ) : (
          <Spinner isLoading={isLoading} />
        )}
        <CategoryList />
        <Card />
      </ViewWrapper>
    </MainTemplate>
  );
};

export default Product;
