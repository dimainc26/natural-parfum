import Slug from "./Essentials/Slug";
import Title from "./Essentials/Title";
import LightButton from "./LightButton";

const SubscriptionBanner = () => {
  return (
    <div className="subscription-banner my-5 position-relative d-flex align-items-center">
      <div className="front fluid- container align-items-center d-flex justify-content-between">
        <div className="left w-50">
          <Title title="Subscribe To Get The Latest Promo For Jez Salad" />
          <Slug
            text=" We recommended you to subscribe to our promo program, drop your email
          below to get daily updates about us."
          />
          <form className="d-flex flex-column flex-md-row align-items-center gap-2">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              required
            />
            <LightButton title="Subscribe" onClick={() => null} variant="cta" />
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
