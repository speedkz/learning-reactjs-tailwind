import { Navigate } from "react-router-dom";

const NoAuthGuard = ({ children }) => {
  const authented = true;
  return authented ? children : <Navigate to="/auth" />;
};
export default NoAuthGuard;
