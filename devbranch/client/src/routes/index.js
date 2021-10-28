import Home from "../components/pages/Home";
import App from "../components/ProfileOnChange";
import GameList from "../components/GameListPage";
import ComingSoon from "../components/ComingSoon";

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

  {
    path: "/game",
    component: <GameList/>,
    exact: false,
  },

  {
    path: "/upcoming",
    component: <ComingSoon/>,
    exact: false,
  },
];

export default routes;
