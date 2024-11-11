import { Outlet } from "react-router-dom";
import NavbarFactory from "./NavbarFactory";
import SpinTop from "./Essentials/SpinTop";

const Root = () => {
  return (
    <>
      <NavbarFactory />
      <SpinTop />
      <Outlet />
    </>
  );
};

export default Root;
