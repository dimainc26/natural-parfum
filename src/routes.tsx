import { createHashRouter } from "react-router-dom";
import Home from "./views/Home";
import Root from "./components/Root";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
