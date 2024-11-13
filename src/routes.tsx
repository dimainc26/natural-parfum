import { createHashRouter } from "react-router-dom";
import Home from "./views/Home";
import Root from "./components/Root";
import Shop from "./views/Shop";
import Contacts from "./views/Contacts.tsx";
import Blog from "./views/Blog.tsx";

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
      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export default router;
