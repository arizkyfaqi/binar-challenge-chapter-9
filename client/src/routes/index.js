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

  {
    path: "*",
    component: "Not Found",
    exact: false,
  },
];

export default routes;
