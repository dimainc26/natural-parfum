import { useState } from "react";
import { FaBars, FaSearch, FaStar } from "react-icons/fa";
import NavIconGroup from "./NavIconGroup";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
        <div className="logo">logo</div>
        <ul className="nav-links d-flex align-self-center">
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>

          <li>
            <NavLink to="/contacts">Contacts</NavLink>
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
