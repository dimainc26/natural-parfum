import { useCallback, useEffect, useState } from "react";
import { FaMoneyCheck, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import type { CartProductType } from "../../models/CartProductType";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import LightButton from "../LightButton";

const Cart = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const cartItems: CartProductType[] = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.shoppingCart.items
  );
  const cartLenght = cartItems.length;

  useEffect(() => {
    if (showDropdown && cartLenght === 0) {
      toast.info("Votre panier est vide ! 🛒", {
        position: "top-right",
        autoClose: 3000,
      });

      setShowDropdown(false);
    }
  }, [showDropdown, cartLenght]);

  const navigate = useNavigate();

  const goToCheckout = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <div className="shop-cart" onClick={() => setShowDropdown(!showDropdown)}>
      <button className="cart-button">
        <FaShoppingCart />
        <p className="cart-count">{cartLenght}</p>
      </button>
      {showDropdown && cartLenght > 0 && (
        <div className="dropdown-menu">
          <NavLink className="view-cart-btn" to={"/cart"}>
            See cart
          </NavLink>
          <div className="line"></div>
          <ul className="cart-list">
            {cartItems.slice(0, 5).map((item: CartProductType, index) => (
              <CartItem key={index} product={item} />
            ))}
            {cartItems.length > 5 && <li className="more-items">...more</li>}
          </ul>
          <div className="cart-btn">
            <LightButton
              onClick={goToCheckout}
              title="Checkout"
              variant="light"
              icon={FaMoneyCheck}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
