import { useState } from "react";
import { FaBars, FaSearch, FaStar } from "react-icons/fa";
import NavIconGroup from "./NavIconGroup";

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
        <NavIconGroup
          icons={[
            {
              active: false,
              name: FaStar,
              size: "medium",
              onClick: () => null,
            },
            {
              active: false,
              name: FaSearch,
              size: "medium",
              onClick: () => null,
            },
          ]}
        />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
