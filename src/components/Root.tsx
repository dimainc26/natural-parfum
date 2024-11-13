import { Outlet } from "react-router-dom";
import NavbarFactory from "./Essentials/NavbarFactory.tsx";
import SpinToTop from "./Essentials/SpinToTop.tsx";
import Footer from "./Essentials/Footer.tsx";

const Root = () => {
  return (
    <>
      <NavbarFactory />
      <SpinToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
