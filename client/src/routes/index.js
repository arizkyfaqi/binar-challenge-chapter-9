import Home from "../components/pages/Home";
import App from "../components/ProfileOnChange";
import GameDetailPages from "../components/GameDetailPages";

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
    path: "/gamedetailpages",
    component: <GameDetailPages />,
  },
  {
    path: "*",
    component: "Not Found",
    exact: false,
  },
];

export default routes;
