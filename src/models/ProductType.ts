import type { CategoryId } from "./CategoryType";

type ProductType = {
  id: string;
  img: string;
  stars: number;
  name: string;
  price: number;
  offerPrice: number | null;
  inStock: boolean;
  categories: CategoryId[];
  isBest: boolean;
};

export type { ProductType };
