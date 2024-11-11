import { FaLongArrowAltRight } from "react-icons/fa";
import BestProductItem from "./BestProductItem";
import LightButton from "./LightButton";

const BestSellersProducts = () => {
  const testData = [
    {
      id: 1,
      img: "path/to/versace-bright-crystal.jpg",
      stars: 5,
      name: "Versace Bright Crystal",
      price: 29.0,
      offerPrice: 29.0,
      inStock: true,
    },
    {
      id: 2,
      img: "path/to/miss-dior-eau-de-parfum.jpg",
      stars: 4.5,
      name: "Miss Dior Eau De Parfum",
      price: 30.0,
      offerPrice: 30.0,
      inStock: true,
    },
    {
      id: 3,
      img: "path/to/miss-dior-rose-de-parfum.jpg",
      stars: 4,
      name: "Miss Dior Rose De Parfum",
      price: 20.0,
      offerPrice: null,
      inStock: true,
    },
    {
      id: 4,
      img: "path/to/gucci-flora-perfume.jpg",
      stars: 4,
      name: "Gucci Flora Perfume",
      price: 20.0,
      offerPrice: null,
      inStock: true,
    },
    {
      id: 5,
      img: "path/to/versace-bright-crystal.jpg",
      stars: 5,
      name: "Versace Bright Crystal",
      price: 29.0,
      offerPrice: 29.0,
      inStock: true,
    },
    {
      id: 6,
      img: "path/to/vip-private-show-perfume.jpg",
      stars: 4.5,
      name: "VIP Private Show Perfume",
      price: 30.0,
      offerPrice: null,
      inStock: true,
    },
    {
      id: 7,
      img: "path/to/dune-dior-rose-de-parfum.jpg",
      stars: 4.5,
      name: "Dune Dior Rose De Parfum",
      price: 25.0,
      offerPrice: null,
      inStock: true,
    },
    {
      id: 8,
      img: "path/to/eau-sauvage-perfume.jpg",
      stars: 4,
      name: "Eau Sauvage Perfume",
      price: 20.0,
      offerPrice: null,
      inStock: true,
    },
  ];

  return (
    <section className="container best-sellers-products py-5">
      <div className="d-flex flex-column align-items-center gap-4 justify-content-center">
        <h2 className="title">Best Sellers Products</h2>
        <p className="slug">The stylish and organized cosmetic products</p>
      </div>
      <div className="articles row">
        {testData.map((parfum, index) => {
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
