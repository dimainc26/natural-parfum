import Slug from "./Essentials/Slug";
import Title from "./Essentials/Title";

type Props = {
  variant: "first" | "second";
  first?: FirstType;
  second?: SecondType;
};

type FirstType = {
  size: "small" | "medium";
  title: string;
  backImg: string;
  frontImg: string;
  slug: string;
};

type SecondType = {
  slug: string;
  special: string;
  backImg: string;
  frontImg: string;
};

const OnTopComponent = ({ variant, first, second }: Props) => {
  if (variant === "first" && first) {
    if (first.size === "small") {
      return (
        <div className="column mini-ontop-component d-flex gap-2 flex-column">
          <Title title={first.title} isCentered={true} />
          <Slug text={first.slug} />
          <div id="img-container">
            <p className="back-img"></p>
            <p className="img-box">
              <img src="./pngs/girl-chance-chanel.png" alt="left model" />
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="column ontop-component d-flex gap-5 flex-column">
        <Title title={first.title} />
        <div id="img-container">
          <p className="back-img"></p>
          <p className="img-box">
            <img src="./pngs/girl-chance-chanel.png" alt="left model" />
          </p>
        </div>
        <Slug text={first.slug} />
      </div>
    );
  }

  return (
    <div className="column  ontop-component d-flex gap-5 flex-column">
      <Slug text={second!.slug} />
      <p className="special">{second?.special}</p>
      <div id="img-container-2">
        <p className="back-img"></p>
        <p className="img-box left">
          <img src="./parfums/p-grace-eau.png" alt="left model" />
        </p>
      </div>
    </div>
  );
};

export default OnTopComponent;
