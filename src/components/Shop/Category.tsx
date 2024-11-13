import type { IconType } from "react-icons";

type Props = {
  id: string;
  name: string;
  icon: IconType;
};

const Category = ({ icon: Icon, name }: Props) => {
  return (
    <>
      <button className="category-btn">
        <Icon />
        <span>{name}</span>
      </button>
    </>
  );
};

export default Category;
