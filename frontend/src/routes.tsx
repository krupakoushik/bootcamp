import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import NotFoundPage from "./pages/NotFoundPage";
import CKCSeminar from "./pages/CKCBootcamp";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <CKCSeminar />,
      },

      {
          path:"/admin/login",
          element:<AdminLogin/>
      },
      
      {
          path:"/admin",
          element:<Admin/>
      },

      {
        path: "*",
        element: <NotFoundPage />,
      }
      
    ],
  },
]);
