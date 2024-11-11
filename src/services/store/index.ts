import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    shoppingCart: cartSlice,
    categories: categorySlice,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
