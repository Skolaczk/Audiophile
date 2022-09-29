import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import { FC } from 'react';
import { CenterHeading, StyledOtherProduct } from './OtherProductsList.styles';

type OthersProductsListType = {
  others: Array<{ slug: string; name: string; image: string }>;
};

const OthersProductsList: FC<OthersProductsListType> = ({ others }) => {
  return (
    <>
      <CenterHeading>you may also like</CenterHeading>
      <div>
        {others.map(({ slug, name, image }) => (
          <StyledOtherProduct key={name}>
            <img src={image} alt='' />
            <h4>{name}</h4>
            <ButtonLink to={slug}>see product</ButtonLink>
          </StyledOtherProduct>
        ))}
      </div>
    </>
  );
};

export default OthersProductsList;
