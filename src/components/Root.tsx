import { Outlet } from "react-router-dom";
import NavbarFactory from "./NavbarFactory";
import SpinToTop from "./Essentials/SpinToTop.tsx";
import Footer from "./Footer.tsx";

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
