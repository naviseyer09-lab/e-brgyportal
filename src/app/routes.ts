import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import ResidentLayout from "./pages/ResidentLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import RequestPage from "./pages/RequestPage";
import ServiceStatus from "./pages/ServiceStatus";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/resident",
    Component: ResidentLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "requests",
        Component: RequestPage,
      },
      {
        path: "status",
        Component: ServiceStatus,
      },
    ],
  },
]);
