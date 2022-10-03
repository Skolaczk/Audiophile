import { FC } from 'react';
import { ImagesWrapper } from './ProductGallery.styles';

type ProductGalleryType = {
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
};

const ProductGallery: FC<ProductGalleryType> = ({ gallery }) => {
  return (
    <ImagesWrapper>
      <img src={gallery.first.tablet} alt='' />
      <img src={gallery.second.tablet} alt='' />
      <img src={gallery.third.tablet} alt='' />
    </ImagesWrapper>
  );
};

export default ProductGallery;
