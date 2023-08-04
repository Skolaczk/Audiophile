import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import { FC } from 'react';
import { CenterHeading, ProductsWrapper, StyledOtherProduct } from './OtherProductsList.styles';

export type PropsType = {
  others: Array<{
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }>;
};

const OthersProductsList: FC<PropsType> = ({ others }) => {
  return (
    <div>
      <CenterHeading>you may also like</CenterHeading>
      <ProductsWrapper>
        {others.map(({ slug, name, image }) => (
          <StyledOtherProduct key={name}>
            <picture>
              <source media='(min-width: 768px)' srcSet={image.desktop} />
              <source media='(min-width: 500px)' srcSet={image.tablet} />
              <img src={image.mobile} alt={`${name} image`} />
            </picture>
            <h4>{name}</h4>
            <ButtonLink to={`/category/${slug}`}>see product</ButtonLink>
          </StyledOtherProduct>
        ))}
      </ProductsWrapper>
    </div>
  );
};

export default OthersProductsList;
