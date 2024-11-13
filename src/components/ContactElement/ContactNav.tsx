import {
  FaLocationArrow,
  FaPen,
  FaPeopleCarry,
  FaPhoneAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

type Props = {
  onTabChange: (tab: "contact" | "write") => void;
  activeTab: "contact" | "write";
};

const ContactNav = ({ onTabChange, activeTab }: Props) => {
  return (
    <div className="contact-nav-box py-1">
      <ul>
        <li
          className={activeTab === "contact" ? "active" : ""}
          onClick={() => onTabChange("contact")}
        >
          <FaPhoneAlt /> <NavLink to={"#"}>Contact Us</NavLink>
        </li>
        <li
          className={activeTab === "write" ? "active" : ""}
          onClick={() => onTabChange("write")}
        >
          <FaPen /> <NavLink to={"#"}>Write Us</NavLink>
        </li>
        <li>
          <FaPeopleCarry /> <NavLink to={""}>Faq</NavLink>
        </li>
        <li>
          <FaLocationArrow /> <NavLink to={""}>All shops</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ContactNav;
