import PasswordReset from "Pages/PasswordReset";
import Dashboard from "Pages/Dashboard";
import Auth from "Pages/Auth";

import Profile from "Components/Dashboard/Profile";

export default [
  {
    path: "/",
    component: Auth,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/password-reset/:token",
    component: PasswordReset,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false,
    isPrivate: true,
    routes: [
      {
        path: "/profile",
        component: Profile,
        exact: true,
      },
    ],
  },
];
