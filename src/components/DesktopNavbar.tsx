import { useState } from "react";
import { FaBars, FaShoppingBag, FaStar, FaSearch } from "react-icons/fa";

const DesktopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        <ul className="nav-links d-flex align-self-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
        <div className="logo">logo</div>
        <ul className="nav-links d-flex align-self-center">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <div className="nav-icons">
          <FaShoppingBag className="icon" />
          <FaStar className="icon" />
          <FaSearch className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
