import Categories from "../components/Essentials/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AllProducts from "../components/System/AllProducts";

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
      <Footer />
    </>
  );
};

export default Shop;
