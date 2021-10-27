import { lazy } from "react";
import Home from "../components/pages/Home";
// import EditProfile from "../components/EditPage";
// import App from "../components/onChange";
import App from "../components/ProfileOnChange";
// import ChangePassword from "../components/PasswordPage";
// import ProfilePage from "../components/ProfilePage";

// const CreateUser = lazy(() => import("../components/CreateUser"));
// const SearchUser = lazy(() => import("../components/SearchUser"));
// const EditUser = lazy(() => import("../components/EditUser"));
// const ProfilePage = lazy(() => import("../components/EditUser"));

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
  // {
  //   path: "/profile",
  //   component: <ProfilePage />,
  //   exact: false,
  // },
  // {
  //   path: "/edit-profile",
  //   component: <EditProfile />,
  //   exact: false,
  // },
  // {
  //   path: "/change-password",
  //   component: <ChangePassword />,
  //   exact: false,
  // },
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
