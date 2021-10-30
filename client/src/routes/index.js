import DetailPemain from "../components/DetailPemain/DetailPemain";
import Home from "../components/pages/Home";
import App from "../components/ProfileOnChange";
import GameDetailPages from "../components/GameDetailPages";
import AppAuth from "../components/Authentication";

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
    path: "/GameDetailPages",
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
    path: "*",
    component: "Not Found",
    exact: false,
  },
];

export default routes;
