import { FC } from 'react';
import { ImagesWrapper } from './ProductGallery.styles';

type ProductGalleryType = {
  gallery: { first: string; second: string; third: string };
};

const ProductGallery: FC<ProductGalleryType> = ({ gallery }) => {
  return (
    <ImagesWrapper>
      <img src={gallery.first} alt='' />
      <img src={gallery.second} alt='' />
      <img src={gallery.third} alt='' />
    </ImagesWrapper>
  );
};

export default ProductGallery;
