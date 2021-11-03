import App from "../components/ProfileOnChange";
import DetailPemain from "../components/DetailPemain/DetailPemain";
import Home from "../components/pages/Home";
import GameDetailPages from "../components/GameDetailPages";
import AppAuth from "../components/Authentication";
import AppAuthDua from "../components/Auth/";
import GameList from "../components/GameListPage";
import ComingSoon from "../components/ComingSoon";
import OngoingGame from "../components/OngoingGame";

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
    path: "/game",
    component: <GameList />,
    exact: false,
  },
  {
    path: "/ongoinggame",
    component: <OngoingGame />,
    exact: false,
  },
  {
    path: "/upcoming",
    component: <ComingSoon />,
    exact: false,
  },
  {
    path: "/gamedetailpages",
    component: <GameDetailPages />,
    exact: false,
  },
  {
    path: "/detailpemain",
    component: <DetailPemain />,
    exact: false,
  },
  {
    path: "/signup",
    component: <AppAuth />,
    exact: false,
  },
  {
    path: "/login",
    component: <AppAuth />,
    exact: false,
  },
  {
    path: "/dash",
    component: <AppAuth />,
    exact: false,
  },
  {
    path: "/register",
    component: <AppAuthDua />,
    exact: false,
  },
  {
    path: "/logindua",
    component: <AppAuthDua />,
    exact: false,
  },
  {
    path: "*",
    component: "Not Found",
    exact: false,
  },
];

export default routes;
