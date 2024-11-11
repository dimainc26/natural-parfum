import type { ProductType } from "../models/ProductType";
import type { CartProductType } from "../models/CartProductType";

export const mapProductToCartProduct = (
  product: ProductType,
  quantity: number = 1
): CartProductType => {
  return {
    id: parseInt(product.id, 10),
    name: product.name,
    price: product.offerPrice ?? product.price,
    quantity,
    img: product.img,
  };
};
