import { FC } from 'react';
import { ProductGalleryType } from 'types';
import { ImagesWrapper } from './ProductGallery.styles';

const ProductGallery: FC<ProductGalleryType> = ({ gallery }) => {
  return (
    <ImagesWrapper>
      <img src={gallery.first.tablet} alt='Product first image' />
      <img src={gallery.second.tablet} alt='Product first image' />
      <img src={gallery.third.tablet} alt='Product first image' />
    </ImagesWrapper>
  );
};

export default ProductGallery;
