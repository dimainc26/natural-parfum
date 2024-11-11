import { useEffect } from "react";
import { Carousel } from "bootstrap";
import PromoBanner from "./PromoBanner";

const PromoBannersSlide = () => {
  useEffect(() => {
    const carouselElement = document.getElementById(
      "carouselExampleIndicators"
    );
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 6000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div className="promo-slider">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <PromoBanner
            title="Find Your Beauty Guide"
            cta="Find Out"
            slug="Natural Perfume is committed to cruelty-free"
            img=""
            active={true}
            onClick={() => null}
          />
          <PromoBanner
            title="Perfume, Perfume, and Perfume"
            cta="Got It"
            slug="Natural Perfume is committed to cruelty-free"
            img=""
            active={false}
            onClick={() => null}
          />
          <PromoBanner
            title="Special Promo Next Week"
            cta="On Sale"
            slug="Natural Perfume is committed to cruelty-free"
            img=""
            active={false}
            onClick={() => null}
          />
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PromoBannersSlide;
