import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import NotFoundPage from "./pages/NotFoundPage";
import CKCSeminar from "./pages/CKCBootcamp";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRegistrations from "./pages/admin/AdminRegistration"

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
          element:<AdminDashboard />
      },
      
      {
          path:"/admin/registrations",
          element:<AdminRegistrations />
      },


      {
        path: "*",
        element: <NotFoundPage />,
      }
      
    ],
  },
]);
