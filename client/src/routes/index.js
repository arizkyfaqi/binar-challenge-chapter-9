import DetailPemain from "../components/DetailPemain/DetailPemain";
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
    path: "*",
    component: "Not Found",
    exact: false,
  },
];

export default routes;

