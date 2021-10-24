// import { lazy } from "react";
import EditProfile from "../components/EditPage";
import ChangePassword from "../components/PasswordPage";
import ProfilePage from "../components/ProfilePage";
import GameList from "../components/GameListPage";
import OngoingGame from "../components/OngoingGame";
import ComingSoon from "../components/ComingSoon";

// const CreateUser = lazy(() => import("../components/CreateUser"));
// const SearchUser = lazy(() => import("../components/SearchUser"));
// const EditUser = lazy(() => import("../components/EditUser"));
// const ProfilePage = lazy(() => import("../components/EditUser"));

const routes = [
  // {
  //   path: "/",
  //   component: <CreateUser />,
  //   exact: true,
  // },
  {
    path: "/profile",
    component: <ProfilePage />,
    exact: false,
  },
  {
    path: "/edit-profile",
    component: <EditProfile />,
    exact: false,
  },
  {
    path: "/change-password",
    component: <ChangePassword />,
    exact: false,
  },
  {
    path: "/Games",
    component: <GameList />,
    exact: false,
  },
  {
    path: "/Ongoinggames",
    component: <OngoingGame />,
    exact: false,
  },
  {
    path: "/Comingsoongames",
    component: <ComingSoon />,
    exact: false,
  },
  // {
  //   path: "/search",
  //   component: <SearchUser />,
  //   exact: false,
  // },
  // {
  //   path: "/edit",
  //   component: <EditUser />,
  //   exact: false,
  // },
  // {
  //   path: "/counter",
  //   component: <Counter />,
  //   exact: false,
  // },
  // {
  //   path: "/counter-class",
  //   component: <CounterClass />,
  //   exact: false,
  // },
  // {
  //   path: "/rating",
  //   component: <RatingComponent />,
  //   exact: false,
  // },
  // {
  //   path: "/rating-class",
  //   // component: <RatingClassComponent />,
  //   component: <Wrapper />,
  //   exact: false,
  // },
  {
    path: "*",
    component: "Not Found",
    exact: false,
  },
];

export default routes;
