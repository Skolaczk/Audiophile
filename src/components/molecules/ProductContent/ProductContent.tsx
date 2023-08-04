import { FC } from 'react';
import {
  FeaturesWrapper,
  ProductCompositionWrapper,
  StyledContent,
  StyledProductContent,
} from './ProductContent.styles';

export type PropsType = {
  features: string;
  includedItems: Array<{ quantity: number; item: string }>;
};

const ProductContent: FC<PropsType> = ({ features, includedItems }) => {
  return (
    <StyledProductContent>
      <FeaturesWrapper>
        <h3>features</h3>
        <StyledContent>{features}</StyledContent>
      </FeaturesWrapper>
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
