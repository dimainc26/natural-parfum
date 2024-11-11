import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryState = {
  selectedCategories: string[];
};

const initialState: CategoryState = {
  selectedCategories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    toggleCategory(state, action: PayloadAction<string>) {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (cat) => cat !== category
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
    clearCategories(state) {
      state.selectedCategories = [];
    },
  },
});

export const { toggleCategory, clearCategories } = categorySlice.actions;
export default categorySlice.reducer;
