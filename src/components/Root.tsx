import { Outlet } from "react-router-dom";
import NavbarFactory from "./NavbarFactory";

const Root = () => {
  return (
    <>
      <NavbarFactory />
      <Outlet />
    </>
  );
};

export default Root;
