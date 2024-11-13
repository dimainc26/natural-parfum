import HighLightCard from "./HighLightCard";
import { FaStackExchange } from "react-icons/fa";
import Spacer from "./Essentials/Spacer";

const HighLightList = () => {
  return (
    <div className="fluid-container highlight-list">
      <Spacer variant="right">
        <HighLightCard
          icon={FaStackExchange}
          title="Join Us"
          description="The most important type of parfume, known as Pure Perfume the highest fragrance."
        />
      </Spacer>
      <Spacer variant="left">
        <HighLightCard
          icon={FaStackExchange}
          title="Enjoy"
          description="The most important type of parfume, known as Pure Perfume the highest fragrance."
        />
      </Spacer>
      <Spacer variant="right">
        <HighLightCard
          icon={FaStackExchange}
          title="Search Products"
          description="The most important type of parfume, known as Pure Perfume the highest fragrance."
        />
      </Spacer>
    </div>
  );
};

export default HighLightList;
