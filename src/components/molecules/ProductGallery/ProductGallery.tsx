import { FC } from 'react';
import { ImagesWrapper } from './ProductGallery.styles';

type PropsType = {
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
};

const ProductGallery: FC<PropsType> = ({ gallery }) => {
  return (
    <ImagesWrapper>
      <img src={gallery.first.tablet} alt='Product first image' />
      <img src={gallery.second.tablet} alt='Product first image' />
      <img src={gallery.third.tablet} alt='Product first image' />
    </ImagesWrapper>
  );
};

export default ProductGallery;
