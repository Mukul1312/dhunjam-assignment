import { Outlet, createBrowserRouter } from "react-router-dom";
import { AdminLoginPage, AdminDetailsPage } from "./pages";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "admin",
        Component: Outlet,
        children: [
          { index: true, Component: AdminLoginPage },
          { path: ":id", Component: AdminDetailsPage },
        ],
      },
    ],
  },
]);

export default router;
