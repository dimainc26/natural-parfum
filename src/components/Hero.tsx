import HeroBox from "./HeroBox";

const Hero = () => {
  return (
    <div className="container hero p-5">
      <div className="row w-100 d-flex g-4">
        <HeroBox
          onClick={() => null}
          title="Floral Fragrances"
          direction="left"
          width="normal"
        />
        <HeroBox
          onClick={() => null}
          title="Fresh Fragrances"
          direction="right"
          width="large"
        />
        <HeroBox
          onClick={() => null}
          title="Oceanic Fragrances"
          direction="right"
          width="normal"
        />
      </div>
    </div>
  );
};

export default Hero;
