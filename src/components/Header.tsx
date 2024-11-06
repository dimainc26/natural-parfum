import { FaLongArrowAltRight } from "react-icons/fa";
import LightButton from "./LightButton";

const Header = () => {
  return (
    <div className="fluid-container header ">
      <div className="back fluid-container">
        <p className="header-left-img-box">
          <span></span>
        </p>
        <p className="header-right-img-box">
          <span></span>
        </p>
        <p className="header-right-parfum-box">
          <span></span>
        </p>
        <p className="header-right-parfum-box-2">
          <span></span>
        </p>
      </div>
      <div className="front fluid-container">
        <div className="container">
          <p className="slogan-first">Hot Gift</p>
          <p className="slogan-title">A Perfect Perfume For Every Mood</p>
          <p className="slogan-slug">
            There is always a lingering, familiar smell that it leaves behind
          </p>
          <LightButton
            onClick={() => null}
            title="Check our Products"
            variant="cta"
            icon={FaLongArrowAltRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
