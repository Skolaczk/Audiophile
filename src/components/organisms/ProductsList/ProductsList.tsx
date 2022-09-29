import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import data from '../../../data/products';
import { FC, useState } from 'react';
import { StyledProductsList, StyledProductsListItem } from './ProductsList.styles';

type ProductsListType = {
  category: string | undefined;
};

const ProductsList: FC<ProductsListType> = ({ category }) => {
  const [products] = useState(data);

  return (
    <StyledProductsList>
      {products.map(({ new: isNew, id, name, categoryImage, description, slug }) => (
        <StyledProductsListItem key={id}>
          <img src={categoryImage} alt='' />
          {isNew ? <h4>new product</h4> : null}
          <h2>{name}</h2>
          <p>{description}</p>
          <ButtonLink to={`/${category}/${slug}`}>see product</ButtonLink>
        </StyledProductsListItem>
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
