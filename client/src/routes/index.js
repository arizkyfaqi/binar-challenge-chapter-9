import GameDetailPages from "../components/GameDetailPages";
import App from "../components/ProfileOnChange";
const routes = [
  {
    path: "/gamedetailpages",
    component: <GameDetailPages />,
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
