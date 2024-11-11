import type { IconType } from "react-icons";
import Title from "./Essentials/Title";
import Slug from "./Essentials/Slug";

type Props = {
  icon: IconType;
  title: string;
  description: string;
};

const HighLightCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="info-card d-flex gap-3 align-items-center">
      <div className="circle d-flex justify-content-center align-items-center">
        <p className="icon d-flex justify-content-center align-items-center m-0 p-0">
          {Icon && <Icon />}
        </p>
      </div>
      <div className="text-box d-flex flex-column ">
        <Title title={title} size="medium" />
        <Slug text={description} size="small" />
      </div>
    </div>
  );
};

export default HighLightCard;
