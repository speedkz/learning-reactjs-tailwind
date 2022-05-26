import NoAuthGuard from "guards/NoAuthGuard";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <NoAuthGuard>
      <Outlet />
    </NoAuthGuard>
  );
};

export default AuthLayout;
