import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import NotFoundPage from "./pages/NotFoundPage";
import CKCSeminar from "./pages/CKCBootcamp";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRegistrations from "./pages/admin/AdminRegistration"
import AdminScan from "./pages/admin/AdminScan"
import AdminAttendance from "./pages/admin/AdminAttendance"
import Terms from "./pages/Terms"

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
          path:"/terms",
          element:<Terms />
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
          path:"/admin/scan",
          element:<AdminScan />
      },

      {
          path:"/admin/attendance",
          element:<AdminAttendance />
      },

      {
        path: "*",
        element: <NotFoundPage />,
      }
      
    ],
  },
]);
