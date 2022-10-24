import { createSlice, configureStore, Middleware } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { CartType } from 'types';
import { ActionTypes } from 'constants/index';

const cartListSlice = createSlice({
  name: 'cartList',
  initialState: Array<CartType>,
  reducers: {
    addProduct(state, { payload }) {
      const currentProduct = state.find(({ shortName }) => shortName === payload.shortName);
      if (currentProduct) {
        currentProduct.quantity += payload.quantity;
      } else {
        state.push({
          id: uuid(),
          ...payload,
        });
      }
    },
    changeProductQuantity(state, { payload }) {
      const currentProduct = state.find(({ id }) => id === payload.id);
      if (!currentProduct) return;

      if (payload.type === ActionTypes.Add) currentProduct.quantity++;
      else currentProduct.quantity--;
    },
    clearCart(state) {
      return state.filter(({ quantity }) => quantity !== 0);
    },
    removeAllProduct() {
      return [];
    },
  },
});

const reHydrateStore = () => {
  if (localStorage.getItem('cartList') !== null) {
    return JSON.parse(localStorage.getItem('cartList')!);
  }
};

const cartListMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('cartList', JSON.stringify(store.getState()));
  return result;
};

export const { addProduct, removeAllProduct, changeProductQuantity, clearCart } =
  cartListSlice.actions;

export const store = configureStore({
  reducer: {
    cartList: cartListSlice.reducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartListMiddleware),
});
