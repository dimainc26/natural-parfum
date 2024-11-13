import Title from "../Essentials/Title";
import { GiWorld } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Title title="Contacts Us" />
      <div>
        <li>
          <GiWorld />
          <NavLink to={"https://dimazanre.com"}>www.dimazanre.com</NavLink>
        </li>
        <li>
          <MdOutlinePhone />
          <NavLink to={"tel:+39 375 557 8879"}>+39 375 557 8879</NavLink>
        </li>
        <li>
          <AiTwotoneMail />
          <NavLink to={"mailto:dimazanre@gmail.com"}>
            dimazanre@gmail.com
          </NavLink>
        </li>
        <li>
          <FaMapMarkerAlt />
          <NavLink to={""}>Somwere in Italy</NavLink>
        </li>
      </div>
    </div>
  );
};

export default ContactUs;
