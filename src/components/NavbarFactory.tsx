import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const NavbarFactory = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
};

export default NavbarFactory;
