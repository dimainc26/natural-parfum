import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setPage } from "../../services/store/productsSlice";
import ProductItem from "./ProductItem";
import Title from "../Essentials/Title";
import type { RootState } from "../../services/store";
import Slug from "../Essentials/Slug";

const AllProducts = () => {
  const dispatch = useDispatch();
  const {
    paginatedProducts,
    currentPage,
    totalPages,
    filteredProducts,
    selectedCategories,
  } = useSelector((state: RootState) => state.products);

  const [animationClass, setAnimationClass] = useState("");

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setAnimationClass("exit-right");

      setTimeout(() => {
        dispatch(setPage(page));
        setAnimationClass("enter-left");
      }, 600);
    }
  };

  const categoryTitle =
    selectedCategories.length > 0
      ? selectedCategories.join(" & ")
      : "All Products";

  return (
    <section className="container all-products py-5">
      <div className="d-flex flex-column align-items-center gap-4 justify-content-center">
        {selectedCategories.length > 0 && <Title title={categoryTitle} />}
        <Slug text={`Browse ${filteredProducts.length} Products`} />
      </div>
      <div
        className={`articles row ${animationClass}`}
        onAnimationEnd={() => setAnimationClass("")}
      >
        {paginatedProducts.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      <div className="pagination-container d-flex justify-content-center align-items-center py-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default AllProducts;
