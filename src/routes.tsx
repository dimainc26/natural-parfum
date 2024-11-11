import { createHashRouter } from "react-router-dom";
import Home from "./views/Home";
import Root from "./components/Root";
import Shop from "./views/Shop";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
