import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  setPage,
  syncCategoriesFromURL,
} from "../../services/store/productsSlice";
import ProductItem from "./ProductItem";
import Title from "../Essentials/Title";
import type { RootState } from "../../services/store";
import Slug from "../Essentials/Slug";
import type { CategoryId } from "../../models/CategoryType";

const AllProducts = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    paginatedProducts,
    currentPage,
    totalPages,
    filteredProducts,
    selectedCategories,
  } = useSelector((state: RootState) => state.products);

  const [animationClass, setAnimationClass] = useState("");

  // Sincronizzare categorie dall'URL
  useEffect(() => {
    const categoriesFromURL = searchParams.getAll("cat") as CategoryId[];
    if (
      categoriesFromURL.length > 0 &&
      categoriesFromURL.join(",") !== selectedCategories.join(",")
    ) {
      dispatch(syncCategoriesFromURL(categoriesFromURL));
    }
  }, [searchParams, selectedCategories, dispatch]);

  // Sincronizzare pagina dall'URL
  useEffect(() => {
    const pageFromURL = Number(searchParams.get("page")) || 1;
    if (pageFromURL !== currentPage) {
      dispatch(setPage(pageFromURL));
    }
  }, [searchParams, currentPage, dispatch]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setAnimationClass("exit-right");

      setTimeout(() => {
        dispatch(setPage(page));

        // Unione dei parametri esistenti e aggiornamento del parametro pagina
        const updatedParams = new URLSearchParams(searchParams.toString());
        updatedParams.set("page", page.toString());
        setSearchParams(updatedParams);

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
