import Slug from "./Essentials/Slug";
import Title from "./Essentials/Title";
import LightButton from "./LightButton";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  active: boolean;
  onClick: () => void;
  img: string;
  cta: string;
  slug: string;
  title: string;
};

const PromoBanner = ({ active, onClick, cta, slug, title }: Props) => {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>
      <p className="back">
        <img src="./pngs/liquid-or.jpg" alt="Third slide" />
      </p>
      <div className="front d-flex align-items-center">
        <p className="front-img">
          <img src="./pngs/p-million.png" alt="" />
        </p>
        <div className="texts-box">
          <Title title={title} size="normal" />
          <Slug text={slug} />
        </div>
        <div>
          <LightButton
            onClick={onClick}
            title={cta}
            variant="light"
            icon={FaLongArrowAltRight}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
