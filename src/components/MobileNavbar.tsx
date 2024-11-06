import { useState } from "react";
import { FaBars, FaShoppingBag, FaStar, FaSearch } from "react-icons/fa";

const MobileNavbar = () => {
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
        <div className="logo">logo</div>
        <div className="nav-icons">
          <FaShoppingBag className="icon" />
          <FaStar className="icon" />
          <FaSearch className="icon" />
        </div>
      </div>
      <div className={`mobile-nav-links ${isMenuOpen ? "show" : ""}`}>
        <ul className="nav-links d-flex flex-column align-self-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
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
      </div>
    </nav>
  );
};

export default MobileNavbar;
