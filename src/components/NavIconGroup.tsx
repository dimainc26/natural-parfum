import type { IconType } from "react-icons";
import Cart from "./System/Cart";

type Props = {
  icons: IconMaterialize[];
};

type IconMaterialize = {
  name: IconType;
  active: boolean;
  size: "medium" | "small";
  onClick?: () => void;
  color?: string;
};

const NavIconGroup = ({ icons }: Props) => {
  return (
    <div className="nav-icons">
      <Cart />
      {icons.map((icon, index) => {
        const Icon = icon.name;

        return (
          <button key={index} onClick={icon.onClick}>
            <Icon className={icon.size === "medium" ? "icon" : "small-icon"} />
          </button>
        );
      })}
    </div>
  );
};

export default NavIconGroup;
