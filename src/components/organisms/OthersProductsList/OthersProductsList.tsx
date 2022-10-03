import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import { FC } from 'react';
import { CenterHeading, ProductsWrapper, StyledOtherProduct } from './OtherProductsList.styles';

type OthersProductsListType = {
  others: Array<{
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }>;
};

const OthersProductsList: FC<OthersProductsListType> = ({ others }) => {
  return (
    <>
      <CenterHeading>you may also like</CenterHeading>
      <ProductsWrapper>
        {others.map(({ slug, name, image }) => (
          <StyledOtherProduct key={name}>
            <picture>
              <source media='(min-width: 768px)' srcSet={image.desktop} />
              <source media='(min-width: 500px)' srcSet={image.tablet} />
              <img src={image.mobile} alt='' />
            </picture>
            <h4>{name}</h4>
            <ButtonLink to={slug}>see product</ButtonLink>
          </StyledOtherProduct>
        ))}
      </ProductsWrapper>
    </>
  );
};

export default OthersProductsList;
