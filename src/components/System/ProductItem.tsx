import type { ProductType } from "../../models/ProductType";

import { useDispatch } from "react-redux";
import { addItem } from "../../services/store/cartSlice";
import { FaStar } from "react-icons/fa";
import { mapProductToCartProduct } from "../../mappers/productToCart";

type Props = {
  product: ProductType;
};

const ProductItem = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartProduct = mapProductToCartProduct(product, 1);
    dispatch(addItem(cartProduct));
  };

  return (
    <article className="product-article col-6 col-lg-3 col-md-3">
      <div>
        <p className="p-img-box d-flex justify-content-center align-items-center">
          <img src={product.img} alt="perfum" />
        </p>
        <div className="p-details d-flex flex-column justify-content-center align-items-center">
          <div className="star-box d-flex">
            {Array.from({ length: product.stars }, (_, index) => (
              <FaStar color="var(--primary-color)" key={index} />
            ))}
          </div>
          <p className="p-title">{product.name}</p>
        </div>
        <div className="p-cta d-flex align-items-center justify-content-center">
          <button onClick={handleAddToCart}>Add To Card</button>
          <p className="d-flex justify-content-around align-items-center">
            {product.offerPrice ? <span>${product.offerPrice}</span> : null} $
            {product.price}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
