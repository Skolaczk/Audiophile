import ImageMobile from 'images/mobile/image-best-gear.jpg';
import ImageTablet from 'images/tablet/image-best-gear.jpg';
import ImageDesktop from 'images/desktop/image-best-gear.jpg';
import { StyledContentCard } from './ContentCard.styles';

const ContentCard = () => {
  return (
    <StyledContentCard>
      <picture>
        <source media='(min-width: 768px)' srcSet={ImageDesktop} />
        <source media='(min-width: 500px)' srcSet={ImageTablet} />
        <img src={ImageMobile} alt='' />
      </picture>
      <div>
        <h2>
          bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </StyledContentCard>
  );
};

export default ContentCard;
