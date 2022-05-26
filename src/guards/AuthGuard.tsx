import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const authented = false;
  return authented ? children : <Navigate to="/auth" />;
};
export default AuthGuard;
