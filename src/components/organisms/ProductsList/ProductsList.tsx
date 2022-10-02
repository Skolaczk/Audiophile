import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import data from '../../../data/products';
import { FC, useEffect, useState } from 'react';
import { StyledProductsList, StyledProductsListItem } from './ProductsList.styles';
import { useLocation } from 'react-router-dom';

type ProductsListType = {
  category: string | undefined;
};

const ProductsList: FC<ProductsListType> = ({ category }) => {
  const location = useLocation();
  const [products, setProducts] = useState(data.filter((product) => product.category === category));

  useEffect(() => {
    setProducts(data.filter((product) => product.category === category));
  }, [location]);

  return (
    <StyledProductsList>
      {products.map(({ new: isNew, id, name, categoryImage, description, slug }) => (
        <StyledProductsListItem key={id}>
          <picture>
            <source media='(min-width: 768px)' srcSet={categoryImage.desktop} />
            <source media='(min-width: 500px)' srcSet={categoryImage.tablet} />
            <img src={categoryImage.mobile} alt='' />
          </picture>
          <div>
            {isNew ? <h4>new product</h4> : null}
            <h2>{name}</h2>
            <p>{description}</p>
            <ButtonLink to={`/${category}/${slug}`}>see product</ButtonLink>
          </div>
        </StyledProductsListItem>
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
