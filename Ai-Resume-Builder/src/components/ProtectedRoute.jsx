

import { Navigate } from "react-router-dom";
import { ROUTES_PATH } from "../constant";
import { readSavedDraft } from "../utils/resumeDraft";

const ProtectedRoute = ({ route, children }) => {
    const hasValidUserData = Boolean(readSavedDraft());
    const isAllFormsFilled = localStorage.getItem("isAllFormsFilled") === "true";

    if (
        [ROUTES_PATH.FORM_SECTIONS, ROUTES_PATH.PREVIEW, ROUTES_PATH.RESUME_SUCCESS].includes(route) &&
        !hasValidUserData
    ) {
        return <Navigate to={ROUTES_PATH.HOME} replace />;
    }

    if ([ROUTES_PATH.PREVIEW, ROUTES_PATH.RESUME_SUCCESS].includes(route) && !isAllFormsFilled) {
        return <Navigate to={ROUTES_PATH.FORM_SECTIONS} replace />;
    }

    if (route === ROUTES_PATH.RESUME_SUCCESS && localStorage.getItem("downloadCompleted") !== "true") {
        return <Navigate to={ROUTES_PATH.PREVIEW} replace />;
    }

    return children;
};

export default ProtectedRoute;
