import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import MiniNavBar from "./MiniNavBar";
import { useState, useEffect } from "react";
import { throttle } from "lodash";

const NavbarFactory = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;

      // Condizioni diverse per mobile e desktop
      if (isMobile) {
        if (currentScrollY > 50 && currentScrollY > lastScrollY) {
          setIsScrolled(true);
        } else if (currentScrollY < lastScrollY - 30 || currentScrollY < 50) {
          setIsScrolled(false);
        }
      } else {
        if (currentScrollY > 100 && currentScrollY > lastScrollY) {
          setIsScrolled(true);
        } else if (currentScrollY < lastScrollY - 50 || currentScrollY < 100) {
          setIsScrolled(false);
        }
      }

      setLastScrollY(currentScrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobile]);

  const handleToggleNavbar = () => {
    setIsScrolled(false);
  };

  return (
    <>
      {isScrolled ? (
        <MiniNavBar onToggleNavbar={handleToggleNavbar} />
      ) : isMobile ? (
        <MobileNavbar />
      ) : (
        <DesktopNavbar />
      )}
    </>
  );
};

export default NavbarFactory;
