import { FaStar } from "react-icons/fa";
import type { BestParfumType } from "../models/BestParfumType";
import { useDispatch } from "react-redux";
import { addItem } from "../services/store/cartSlice";

type Props = {
  parfum: BestParfumType;
};

const BestProductItem = ({ parfum }: Props) => {
  const dispatch = useDispatch();

  return (
    <article className="best-article col-6 col-lg-3 col-md-3">
      <div>
        <p className="p-img-box d-flex justify-content-center align-items-center">
          <img src={parfum.img} alt="p-jordan" />
        </p>
        <div className="p-details d-flex flex-column justify-content-center align-items-center">
          <div className="star-box d-flex">
            {Array.from({ length: parfum.stars }, (_, index) => (
              <FaStar color="var(--primary-color)" key={index} />
            ))}
          </div>
          <p className="p-title">{parfum.name}</p>
        </div>
        <div className="p-cta d-flex align-items-center justify-content-center">
          <button onClick={() => dispatch(addItem({ ...parfum, quantity: 1 }))}>
            Add To Card
          </button>
          <p className="d-flex justify-content-around align-items-center">
            {parfum.offerPrice ? <span>${parfum.offerPrice}</span> : null} $
            {parfum.price}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BestProductItem;
