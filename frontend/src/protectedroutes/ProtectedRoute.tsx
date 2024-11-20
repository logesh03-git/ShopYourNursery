import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any) {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  return isAuthenticated ? children : <Navigate to="/" />;
}
