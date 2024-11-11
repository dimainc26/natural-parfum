import { FaLongArrowAltRight } from "react-icons/fa";
import LightButton from "./LightButton";

type Props = {
  special: string;
  title: string;
  slug?: string;
  letfImg?: string;
  rightImg?: string;
  leftMargin?: string;

  ctaText: string;
  ctaAction: () => void;
};

const Header = ({
  ctaText,
  ctaAction,
  special,
  title,
  letfImg,
  leftMargin,
  rightImg,
  slug,
}: Props) => {
  const styleProperties = {
    backgroundImage: letfImg
      ? `url(${letfImg})`
      : 'url("../pngs/left-model.png")',
    left: leftMargin,
  };

  const rightStyleProperties = {
    backgroundImage: rightImg
      ? `url(${rightImg})`
      : 'url("../parfums/p-jordan.png")',
  };

  return (
    <div className="fluid-container header ">
      <div className="back fluid-container">
        <p className="header-left-img-box" style={styleProperties}>
          <span></span>
        </p>
        <p className="header-right-img-box">
          <span></span>
        </p>
        <p className="header-right-parfum-box" style={rightStyleProperties}>
          <span></span>
        </p>
        <p className="header-right-parfum-box-2">
          <span></span>
        </p>
      </div>
      <div className="front fluid-container">
        <div className="container">
          <p className="slogan-first">{special}</p>
          <p className="slogan-title">{title}</p>
          <p className="slogan-slug">{slug} </p>
          <LightButton
            onClick={ctaAction}
            title={ctaText}
            variant="cta"
            icon={FaLongArrowAltRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
