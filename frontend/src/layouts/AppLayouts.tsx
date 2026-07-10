import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <Toaster richColors position="top-right" />
    </>
  );
}
