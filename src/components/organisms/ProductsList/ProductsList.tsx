import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import { db } from '../../../firebase/Firebase';
import { FC, useEffect, useState } from 'react';
import { StyledProductsList, StyledProductsListItem } from './ProductsList.styles';
import { CategoryType } from 'types';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from 'components/atoms/Spinner/Spinner';
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore';

const ProductsList: FC<CategoryType> = ({ category }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Array<DocumentData>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const colRef = collection(db, 'products');
  const q = query(colRef, where('category', '==', category));

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(q);

      const productsArray: Array<DocumentData> = [];
      querySnapshot.forEach((doc) => {
        productsArray.push(doc.data());
      });
      setProducts(productsArray);
      setIsLoading(false);
    };

    getProducts();
  }, [pathname]);

  useEffect(() => {
    if (!isLoading && !products.length) navigate('/404');
  }, [isLoading, products]);

  return (
    <StyledProductsList>
      {products && !isLoading ? (
        products.map(({ isNew, name, categoryImage, description, slug }) => (
          <StyledProductsListItem key={name}>
            <picture>
              <source media='(min-width: 768px)' srcSet={categoryImage.desktop} />
              <source media='(min-width: 500px)' srcSet={categoryImage.tablet} />
              <img src={categoryImage.mobile} alt={`${name} image`} />
            </picture>
            <div>
              {isNew && <h3>new product</h3>}
              <h2>{name}</h2>
              <p>{description}</p>
              <ButtonLink to={`/category/${category}/${slug}`}>see product</ButtonLink>
            </div>
          </StyledProductsListItem>
        ))
      ) : (
        <Spinner isLoading={isLoading} />
      )}
    </StyledProductsList>
  );
};

export default ProductsList;
