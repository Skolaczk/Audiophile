import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import { FC, useEffect, useState } from 'react';
import { StyledProductsList, StyledProductsListItem } from './ProductsList.styles';
import { ProductsListType } from 'types';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Spinner from 'components/atoms/Spinner/Spinner';

type ProductType = {
  id: number;
  isNew: boolean;
  name: string;
  categoryImage: { mobile: string; tablet: string; desktop: string };
  slug: string;
  description: string;
};

const ProductsList: FC<ProductsListType> = ({ category }) => {
  const location = useLocation();
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);
    axios
      .get(`https://audiophile-database.herokuapp.com/products?category=${category}`)
      .then(({ data }) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [location]);

  return (
    <StyledProductsList>
      {products && !isLoading ? (
        products.map(({ isNew, id, name, categoryImage, description, slug }) => (
          <StyledProductsListItem key={id}>
            <picture>
              <source media='(min-width: 768px)' srcSet={categoryImage.desktop} />
              <source media='(min-width: 500px)' srcSet={categoryImage.tablet} />
              <img src={categoryImage.mobile} alt='' />
            </picture>
            <div>
              {isNew && <h4>new product</h4>}
              <h2>{name}</h2>
              <p>{description}</p>
              <ButtonLink to={`/${category}/${slug}`}>see product</ButtonLink>
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
