import type { ProductType } from "../models/ProductType";
import type { BestParfumType } from "../models/BestParfumType";

export const mapProductToBestParfum = (
  products: ProductType[]
): BestParfumType[] => {
  return products
    .filter((product) => product.isBest)
    .map((product) => ({
      id: parseInt(product.id, 10),
      img: product.img,
      stars: product.stars,
      name: product.name,
      price: product.price,
      offerPrice: product.offerPrice,
      inStock: product.inStock,
    }));
};
