import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CKCSeminar from "./pages/CKCSeminar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      
      {
        index: true,
        path: "seminar",
        element: <CKCSeminar />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      }
      
    ],
  },
]);
