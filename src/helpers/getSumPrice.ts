type Product = {
  id: string;
  name: string;
  image: string;
  productPrice: number;
  quantity: number;
};

export const getSumPrice = (data: Array<Product>) => {
  if (!data.length) return 0;
  const sum = data.reduce((acc, { productPrice, quantity }) => {
    return (acc += productPrice * quantity);
  }, 0);
  return sum;
};
