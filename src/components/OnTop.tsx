import OnTopComponent from "./OnTopComponent";

const OnTop = () => {
  return (
    <div className="container p-5 on-top d-flex justify-content-between gap-2">
      <OnTopComponent
        variant="first"
        first={{
          title: "The Scent That's A Rose To Your Senses",
          slug: " The most important type of perfume, Parfum, also known as Pure Perfume or Extrait de Parfum, boasts the highest fragrance concentration. A fragrance that is classified as Parfum has a concentration between 20% to 40%.",
          backImg: "",
          frontImg: "",
          size: "medium",
        }}
      />
      <OnTopComponent
        variant="second"
        second={{
          backImg: "",
          frontImg: "",
          slug: " Popularized through customer relationships with some of the world’s most recognizable faces.",
          special:
            " First perfumes come from the island of Cyprus, nearly 4000 years ago, but the Egyptians were the ones to make perfume truly a part of their culture 3000 years ago. The first actual *factory* dedicated to the production of perfumed oils dates back 4000 years on the island of Cyprus.",
        }}
      />
    </div>
  );
};

export default OnTop;
