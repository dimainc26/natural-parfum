import Title from "./Essentials/Title";
import HighLightList from "./HighLightList";
import OnTopComponent from "./OnTopComponent";

const WhoChooseUs = () => {
  return (
    <div className="container who-choose d-flex flex-column py-5">
      <Title isCentered={true} title="Why Choose Us?" />
      <div className="d-flex flex-md-row flex-column gap-2">
        <OnTopComponent
          variant="first"
          first={{
            size: "small",
            title: "Select The Best Perfume For You",
            slug: " The most important type of perfume, Parfum, also known as Pure Perfume or Extrait de Parfum, boasts the highest fragrance concentration.",
            backImg: "",
            frontImg: "",
          }}
        />
        <div className="col-md-6">
          <HighLightList />
        </div>
      </div>
    </div>
  );
};

export default WhoChooseUs;
