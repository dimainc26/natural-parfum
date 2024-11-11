import { FaBars } from "react-icons/fa";
import Cart from "./System/Cart";

type MiniNavBarProps = {
  onToggleNavbar: () => void;
};

const MiniNavBar = ({ onToggleNavbar }: MiniNavBarProps) => {
  return (
    <div className="mini-navbar d-flex justify-content-center gap-2 align-items-center">
      <Cart />
      <button className="bars" onClick={onToggleNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default MiniNavBar;
