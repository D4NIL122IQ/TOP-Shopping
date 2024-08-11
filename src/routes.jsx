import App from "./App";
import ErrorPage from "./ErrorPage";
import Aboutus from "./about";
import Shopp from "./shopp";

const routes = [
  {
    path: "/TOP-Shopping/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path:"TOP-Shopping/about",
    element: <Aboutus />
  },
  {
    path: "TOP-Shopping/shopp",
    element: <Shopp />
  }
];

export default routes;
