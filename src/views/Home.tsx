import BestSellersProducts from "../components/BestSellersProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HorizontalPhotoGallery from "../components/HorizontalPhotoGallery";
import OnTop from "../components/OnTop";
import PromoBannersSlide from "../components/PromoBannersSlide";
import SubscriptionBanner from "../components/SubscriptionBanner";
import Testimonials from "../components/Testimonials";
import WhoChooseUs from "../components/WhoChooseUs";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <OnTop />
      <PromoBannersSlide />
      <BestSellersProducts />
      <WhoChooseUs />
      <Testimonials />
      <HorizontalPhotoGallery />
      <SubscriptionBanner />
      <Footer />
    </>
  );
};

export default Home;
