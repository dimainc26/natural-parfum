import Title from "./Essentials/Title";
import Slug from "./Essentials/Slug";
import LightButton from "./LightButton";
import { FaLongArrowAltRight } from "react-icons/fa";

const HorizontalPhotoGallery = () => {
  return (
    <section className="fluid-container overflow-hidden py-5 d-flex align-items-center photo-gallery">
      <div className="d-flex w-100 gap-5">
        <div className="d-flex texts flex-column justify-content-center">
          <Title title="Instagram Photo Gallery" />
          <Slug
            text=" Yellow tang sea devil tang, wrymouth killifish southern flounder
            weatherfish. Cuckoo wrasse yellow jack resides."
          />
          <LightButton
            onClick={() => null}
            title="Explore More"
            variant="light"
            icon={FaLongArrowAltRight}
          />
        </div>

        <div className="d-flex  photos-box justify-content-center align-items-center gap-5">
          <div className="img-box">
            <p
              className="img"
              style={{
                backgroundImage: ' url("./pngs/liquid-or.jpg")',
              }}
            ></p>
          </div>
          <div className="img-box">
            <p
              className="img"
              style={{
                backgroundImage: ' url("./pngs/liquid-or.jpg")',
              }}
            ></p>
          </div>
          <div className="img-box">
            <p
              className="img"
              style={{
                backgroundImage: ' url("./pngs/liquid-or.jpg")',
              }}
            ></p>
          </div>
          <div className="img-box">
            <p
              className="img"
              style={{
                backgroundImage: ' url("./pngs/liquid-or.jpg")',
              }}
            ></p>
          </div>
          <div className="img-box">
            <p
              className="img"
              style={{
                backgroundImage: ' url("./pngs/liquid-or.jpg")',
              }}
            ></p>
          </div>
          <div className="img-box">
            <p
              className="img"
              style={{
                backgroundImage: ' url("./pngs/liquid-or.jpg")',
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalPhotoGallery;
