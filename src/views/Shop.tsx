import Categories from "../components/Shop/Categories";
import Header from "../components/Header";
import AllProducts from "../components/Shop/AllProducts";
import Spacer from "../components/Essentials/Spacer";

const Shop = () => {
  return (
    <>
      <Spacer variant="top">
        <Header
          ctaAction={() => null}
          special="Buy Easily"
          title="Welcome to our Shop"
          ctaText="See Promo"
          letfImg="./pngs/girl-sneezy.png"
          leftMargin="-20%"
          rightImg="./parfums/p-grace-eau.png"
        />
      </Spacer>
      <Categories />
      <AllProducts />
    </>
  );
};

export default Shop;
