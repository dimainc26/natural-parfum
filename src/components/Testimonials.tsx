import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Carousel } from "bootstrap";
import TestimonialCard from "./TastimonialCard";
import { useEffect } from "react";
import Title from "./Essentials/Title";
import Slug from "./Essentials/Slug";

const Testimonials = () => {
  useEffect(() => {
    const carouselElement = document.getElementById(
      "testimonialsCarouselUnique"
    );
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 12000000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div className="testimonials py-5">
      <Title title="Testimonials" isCentered={true} />
      <Slug
        isCentered={true}
        text=" Made using clean, non-toxic ingredients, our products are designed for
    everyone."
      />

      <div
        id="testimonialsCarouselUnique"
        className="container carousel testimonial-list slide"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <TestimonialCard
                name="Fade Warren"
                text=" I've been using Water Away for a few months and can say it does what
            it supposed to. I like salty foods, pickles, chips which leave me
            thirsty afterwards, so I drink a ton of water."
              />
              <TestimonialCard name="Mike Billie" text="How do you do?" />
              <TestimonialCard name="Mike Billie" text="How do you do?" />
              <TestimonialCard name="Mike Billie" text="How do you do?" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <TestimonialCard
                name="Jeanna Polo"
                text="We love It. Thanks so much."
              />
              <TestimonialCard
                name="Fade Warren"
                text=" I've been using Water Away for a few months and can say it does what
            it supposed to. I like salty foods, pickles, chips which leave me
            thirsty afterwards, so I drink a ton of water."
              />
              <TestimonialCard
                name="Fade Warren"
                text=" I've been using Water Away for a few months and can say it does what
            it supposed to. I like salty foods, pickles, chips which leave me
            thirsty afterwards, so I drink a ton of water."
              />
              <TestimonialCard
                name="Fade Warren"
                text=" I've been using Water Away for a few months and can say it does what
            it supposed to. I like salty foods, pickles, chips which leave me
            thirsty afterwards, so I drink a ton of water."
              />
            </div>
          </div>
        </div>

        <div className="btn-position d-flex justify-content-center align-items-center">
          <button
            type="button"
            data-bs-target="#testimonialsCarouselUnique"
            data-bs-slide="prev"
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            type="button"
            data-bs-target="#testimonialsCarouselUnique"
            data-bs-slide="next"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
