import { FC } from 'react';
import { ProductGalleryType } from 'types';
import { ImagesWrapper } from './ProductGallery.styles';

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
