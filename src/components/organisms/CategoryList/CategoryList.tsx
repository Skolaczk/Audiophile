import { ReactComponent as ArrowRightIcon } from 'assets/icons/icon-arrow-right.svg';
import Earphones from 'images/shared/desktop/image-earphones.png';
import Headphones from 'images/shared/desktop/image-headphones.png';
import Speakers from 'images/shared/desktop/image-speakers.png';
import { Link } from 'react-router-dom';
import { StyledCategoryList } from './CategoryList.styles';

const CategoryList = () => {
  return (
    <StyledCategoryList>
      <Link to='/earphones'>
        <div>
          <img src={Earphones} alt='' />
          <h3>earphones</h3>
          <p>
            shop <ArrowRightIcon />
          </p>
        </div>
      </Link>
      <Link to='/headphones'>
        <div>
          <img src={Headphones} alt='' />
          <h3>headphones</h3>
          <p>
            shop <ArrowRightIcon />
          </p>
        </div>
      </Link>
      <Link to='/speakers'>
        <div>
          <img src={Speakers} alt='' />
          <h3>speakers</h3>
          <p>
            shop <ArrowRightIcon />
          </p>
        </div>
      </Link>
    </StyledCategoryList>
  );
};

export default CategoryList;
