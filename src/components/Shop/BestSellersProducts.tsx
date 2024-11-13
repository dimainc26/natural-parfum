import { FaLongArrowAltRight } from "react-icons/fa";
import BestProductItem from "./BestProductItem";
import LightButton from "../LightButton";
import { testData } from "../../mocks/products";
import { mapProductToBestParfum } from "../../mappers/productToBest";

const BestSellersProducts = () => {
  const bestProducts = mapProductToBestParfum(testData);

  return (
    <section className="container best-sellers-products py-5">
      <div className="d-flex flex-column align-items-center gap-4 justify-content-center">
        <h2 className="title">Best Sellers Products</h2>
        <p className="slug">The stylish and organized cosmetic products</p>
      </div>
      <div className="articles row">
        {bestProducts.map((parfum, index) => {
          return <BestProductItem key={index} parfum={parfum} />;
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center p-5">
        <LightButton
          title="Explore More"
          onClick={() => null}
          icon={FaLongArrowAltRight}
          variant="light"
        />
      </div>
    </section>
  );
};

export default BestSellersProducts;
