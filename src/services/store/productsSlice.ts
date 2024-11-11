import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { testData } from "../../mocks/products";
import type { ProductType } from "../../models/ProductType";
import type { CategoryId } from "../../models/CategoryType";

interface ProductsState {
  selectedCategories: CategoryId[]; // Ora usa CategoryId
  currentPage: number;
  paginatedProducts: ProductType[];
  filteredProducts: ProductType[];
  totalPages: number;
}

const PRODUCTS_PER_PAGE = 16;

const initialState: ProductsState = {
  selectedCategories: [],
  currentPage: 1,
  filteredProducts: testData,
  paginatedProducts: testData.slice(0, PRODUCTS_PER_PAGE),
  totalPages: Math.ceil(testData.length / PRODUCTS_PER_PAGE),
};

const filterProducts = (
  products: ProductType[],
  categories: CategoryId[]
): ProductType[] => {
  if (categories.length === 0) return products;
  return products.filter((product) =>
    categories.every((cat) => product.categories.includes(cat))
  );
};

const paginateProducts = (
  products: ProductType[],
  currentPage: number
): ProductType[] => {
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  return products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleCategory(state, action: PayloadAction<CategoryId>) {
      const category = action.payload;

      // Gestisci le categorie selezionate
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (cat) => cat !== category
        );
      } else {
        state.selectedCategories.push(category);
      }

      // Aggiorna i prodotti filtrati
      const filtered = filterProducts(testData, state.selectedCategories);
      state.filteredProducts = filtered;

      // Calcola le pagine totali e resetta la paginazione
      state.totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
      state.currentPage = 1;
      state.paginatedProducts = paginateProducts(filtered, 1);
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      state.paginatedProducts = paginateProducts(
        state.filteredProducts,
        state.currentPage
      );
    },
  },
});

export const { toggleCategory, setPage } = productsSlice.actions;
export default productsSlice.reducer;
