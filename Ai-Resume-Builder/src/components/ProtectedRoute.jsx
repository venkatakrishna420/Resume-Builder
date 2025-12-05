import { Navigate } from "react-router-dom";
import { ROUTES_PATH } from "../constant";

const ProtectedRoute = ({ route, children }) => {
  const userData = localStorage.getItem("userData");
  const isAllFormsFilled = localStorage.getItem("isAllFormsFilled") === "true"; // STRICT CHECK

  //  Block direct access to FORM & PREVIEW if no user exists
  if ((route === ROUTES_PATH.FORM_SECTIONS || route === ROUTES_PATH.PREVIEW) && !userData) {
    return <Navigate to={ROUTES_PATH.HOME} replace />;
  }

  //  Block preview if last form NOT submitted
  if (route === ROUTES_PATH.PREVIEW && !isAllFormsFilled) {
    return <Navigate to={ROUTES_PATH.FORM_SECTIONS} replace />;
  }

  // Allow render
  return children;
};

export default ProtectedRoute;