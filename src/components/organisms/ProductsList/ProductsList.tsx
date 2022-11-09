import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import { FC, useEffect, useState } from 'react';
import { StyledProductsList, StyledProductsListItem } from './ProductsList.styles';
import { CategoryType, ProductsListType } from 'types';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from 'components/atoms/Spinner/Spinner';

const ProductsList: FC<CategoryType> = ({ category }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Array<ProductsListType>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://audiophile-database.herokuapp.com/products?category=${category}`)
      .then(({ data }) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [location]);

  useEffect(() => {
    if (!isLoading && !products.length) navigate('/');
  }, [isLoading, products]);

  return (
    <StyledProductsList>
      {products && !isLoading ? (
        products.map(({ isNew, id, name, categoryImage, description, slug }) => (
          <StyledProductsListItem key={id}>
            <picture>
              <source media='(min-width: 768px)' srcSet={categoryImage.desktop} />
              <source media='(min-width: 500px)' srcSet={categoryImage.tablet} />
              <img src={categoryImage.mobile} alt={`${name} image`} />
            </picture>
            <div>
              {isNew && <h3>new product</h3>}
              <h2>{name}</h2>
              <p>{description}</p>
              <ButtonLink to={`/category/${category}/${slug}`}>see product</ButtonLink>
            </div>
          </StyledProductsListItem>
        ))
      ) : (
        <Spinner isLoading={isLoading} />
      )}
    </StyledProductsList>
  );
};

export default ProductsList;
