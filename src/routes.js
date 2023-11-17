import { Outlet, createBrowserRouter } from "react-router-dom";
import { AdminLoginPage, AdminDetailsPage } from "./pages";
import Root from "./Root";
import { adminLoginAction, adminDetailsUpdateAction } from "./api/actions";
import { adminDetailsLoader } from "./api/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "admin",
        Component: Outlet,
        children: [
          { index: true, Component: AdminLoginPage, action: adminLoginAction },
          { path: ":id", Component: AdminDetailsPage, loader: adminDetailsLoader, action: adminDetailsUpdateAction },
        ],
      },
    ],
  },
]);

export default router;
