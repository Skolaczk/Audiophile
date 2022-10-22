import { CartType } from 'types';

export const getQuantityProducts = (data: Array<CartType>) => {
  if (!data.length) return 0;
  const quantity = data.reduce((acc, { quantity }) => {
    return (acc += quantity);
  }, 0);
  return quantity;
};
