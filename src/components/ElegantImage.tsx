import { FaArrowDown } from "react-icons/fa";
import LightButton from "./LightButton";
import { useState } from "react";

const ElegantImage = () => {
  const images = ["./parfums/p-million.png", "./parfums/p-roberto.png"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChangeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const backImg = {
    backgroundImage: `url('${images[currentImageIndex]}')`,
  };

  return (
    <div className="d-flex elegant-image-box justify-content-center align-items-center">
      <div className="back" style={backImg}></div>
      <div className="front d-flex justify-content-center align-items-center w-100 h-100">
        <LightButton
          onClick={handleChangeImage}
          title=""
          variant="light"
          icon={FaArrowDown}
        />
      </div>
    </div>
  );
};

export default ElegantImage;
