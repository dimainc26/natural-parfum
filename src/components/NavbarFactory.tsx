import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { useEffect, useState } from "react";
import MiniNavBar from "./MiniNavBar";

const NavbarFactory = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true); // Scroll verso il basso
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false); // Scroll verso l'alto
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleToggleNavbar = () => {
    setIsScrolled(false); // Ritorna alla DesktopNavbar
  };

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : isScrolled ? (
        <MiniNavBar onToggleNavbar={handleToggleNavbar} />
      ) : (
        <DesktopNavbar />
      )}
    </>
  );
};

export default NavbarFactory;
