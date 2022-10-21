import { CartType } from 'types';

export const getSumPrice = (data: Array<CartType>) => {
  if (!data.length) return 0;
  const sum = data.reduce((acc, { productPrice, quantity }) => {
    return (acc += productPrice * quantity);
  }, 0);
  return sum;
};
