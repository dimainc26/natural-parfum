import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartProductType } from "../../models/CartProductType";

type CartState = {
  items: CartProductType[];
  total: number;
};

const loadStateFromLocalStorage = (): CartState => {
  const storedState = localStorage.getItem("shoppingCart");
  return storedState ? JSON.parse(storedState) : { items: [], total: 0 };
};

const saveStateToLocalStorage = (state: CartState) => {
  localStorage.setItem("shoppingCart", JSON.stringify(state));
};

const initialState: CartState = loadStateFromLocalStorage();

const cartSlice = createSlice({
  name: "shopping-cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartProductType>) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        state.items.push({ ...product, quantity: product.quantity || 1 });
      }

      state.total = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      saveStateToLocalStorage(state);
    },

    removeItem(state, action: PayloadAction<number>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      state.total = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      saveStateToLocalStorage(state);
    },

    decrementItemQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }

      state.total = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      saveStateToLocalStorage(state);
    },

    clearCart(state) {
      state.items = [];
      state.total = 0;
      saveStateToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, decrementItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
