import { FC } from 'react';
import {
  ProductCompositionWrapper,
  StyledContent,
  StyledProductContent,
} from './ProductContent.styles';

type ProductContentType = {
  features: string;
  includedItems: Array<{ quantity: number; item: string }>;
};

const ProductContent: FC<ProductContentType> = ({ features, includedItems }) => {
  return (
    <StyledProductContent>
      <div>
        <h3>features</h3>
        <StyledContent>{features}</StyledContent>
      </div>
      <div>
        <h3>in the box</h3>
        <ProductCompositionWrapper>
          {includedItems.map(({ quantity, item }) => (
            <div key={item}>
              <span>{quantity}x</span>
              <p>{item}</p>
            </div>
          ))}
        </ProductCompositionWrapper>
      </div>
    </StyledProductContent>
  );
};

export default ProductContent;
