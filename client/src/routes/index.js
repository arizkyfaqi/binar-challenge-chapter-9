import App from "../components/ProfileOnChange";

const routes = [
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
