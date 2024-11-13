import Categories from "../components/Shop/Categories";
import Header from "../components/Header";
import AllProducts from "../components/Shop/AllProducts";

const Shop = () => {
  return (
    <>
      <Header
        ctaAction={() => null}
        special="Buy Easily"
        title="Welcome to our Shop"
        ctaText="See Promo"
        letfImg="./pngs/girl-sneezy.png"
        leftMargin="-20%"
        rightImg="./parfums/p-grace-eau.png"
      />
      <Categories />
      <AllProducts />
    </>
  );
};

export default Shop;
