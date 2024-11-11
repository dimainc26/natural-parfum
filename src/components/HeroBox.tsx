type Props = {
  width: "large" | "normal";
  title: string;
  img?: string;
  direction: "left" | "right";
  onClick: () => void;
};

const HeroBox = ({ width, title, direction }: Props) => {
  if (width === "large") {
    return (
      <div className="hero-box col-4 col-md-6">
        <div>
          <div className="back"></div>
          <div
            className="front d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: "url(./pngs/liquid-or.jpg)",
              [direction === "left" ? "left" : "right"]: "5%",
            }}
          >
            <p className="title">{title}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-box col-4 col-md-3">
      <div>
        <div className="back"></div>
        <div
          className="front d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: "url(./pngs/liquid-or.jpg)",
            [direction === "left" ? "left" : "right"]: "5%",
          }}
        >
          <p className="title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
