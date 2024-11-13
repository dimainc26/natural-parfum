import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../services/store/productsSlice";
import type { RootState } from "../../services/store";
import { FaFlask, FaGem, FaLeaf } from "react-icons/fa";
import type { CategoryType } from "../../models/CategoryType";
import useURLParams from "../../hooks/useUrlParams";

const categories: CategoryType[] = [
  { id: "floral", name: "Floral", icon: FaLeaf },
  { id: "oriental", name: "Oriental", icon: FaGem },
  { id: "woody", name: "Woody", icon: FaFlask },
];

const Categories = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state: RootState) => state.products.selectedCategories
  );

  const { toggleParam } = useURLParams();

  const handleCategoryClick = (id: "floral" | "oriental" | "woody") => {
    dispatch(toggleCategory(id));
    toggleParam("cat", id);
  };

  return (
    <div className="container categories-box py-5">
      <h2 className="title">Categories</h2>
      <div className="categories d-flex gap-3">
        {categories.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            className={`category-btn ${
              selectedCategories.includes(id) ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(id)}
          >
            <Icon />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
