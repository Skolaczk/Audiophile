import { createSlice, configureStore } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

type Foo = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const cartListSlice = createSlice({
  name: 'cartList',
  initialState: Array<Foo>,
  reducers: {
    addProduct(state, action) {
      const currentProduct = state.find(({ name }) => name === action.payload.name);
      if (currentProduct) {
        currentProduct.quantity += action.payload.quantity;
      } else {
        state.push({
          id: uuid(),
          ...action.payload,
        });
      }
    },
    changeProductQuantity(state, action) {
      const currentProduct = state.find(({ id }) => id === action.payload.id);
      if (!currentProduct) return;

      if (action.payload.type === 'add') currentProduct.quantity++;
      else if (action.payload.type === 'subtract') currentProduct.quantity--;
    },
    clearCart(state) {
      return state.filter(({ quantity }) => quantity !== 0);
    },
    removeAllProduct() {
      return [];
    },
  },
});

export const { addProduct, removeAllProduct, changeProductQuantity, clearCart } =
  cartListSlice.actions;

export const store = configureStore({
  reducer: {
    cartList: cartListSlice.reducer,
  },
});
