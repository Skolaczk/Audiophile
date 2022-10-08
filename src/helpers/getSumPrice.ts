type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export const getSumPrice = (data: Array<Product>) => {
  if (!data.length) return 0;
  const sum = data.reduce((acc, { price, quantity }) => {
    return (acc += price * quantity);
  }, 0);
  return sum;
};
