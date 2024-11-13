import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  addItem,
  removeItem,
  decrementItemQuantity,
} from "../../services/store/cartSlice";
import type { CartProductType } from "../../models/CartProductType";

type Props = {
  product: CartProductType;
};

const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleAddItem = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      dispatch(addItem({ ...product, quantity: 1 }));
    },
    [dispatch, product]
  );

  const handleRemoveItem = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      dispatch(removeItem(product.id));
    },
    [dispatch, product.id]
  );

  const handleDecrementQuantity = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      dispatch(decrementItemQuantity(product.id));
    },
    [dispatch, product.id]
  );

  return (
    <li key={product.id} className="cart-item">
      <p className="img">
        <img src={product.img} alt={product.name} />
      </p>
      <p className="name">{product.name}</p>
      <p className="quantity">{product.quantity}</p>
      <div className="quantity-actions">
        <button onClick={handleDecrementQuantity}>
          <FaMinus />
        </button>
        <button onClick={handleAddItem}>
          <FaPlus />
        </button>
        <button onClick={handleRemoveItem}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
