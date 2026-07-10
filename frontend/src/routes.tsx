import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import NotFoundPage from "./pages/NotFoundPage";
import CKCSeminar from "./pages/CKCSeminar";

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
        path: "*",
        element: <NotFoundPage />,
      }
      
    ],
  },
]);
