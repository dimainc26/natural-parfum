import type { IconType } from "react-icons";

type Props = {
  title: string;
  onClick: () => void;
  icon?: IconType;
  variant: "light" | "cta";
};

const LightButton = ({ onClick, title, icon: Icon, variant }: Props) => {
  return (
    <button className={`btn-${variant}`} onClick={onClick}>
      <span>{title}</span>
      {Icon && <Icon />}
    </button>
  );
};

export default LightButton;
