import Home from "../components/pages/Home";
import App from "../components/ProfileOnChange";

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true,
  },
  {
    path: "/profile",
    component: <App />,
    exact: false,
  },

  {
    path: "*",
    component: "Not Found",
    exact: false,
  },

];

export default routes;
