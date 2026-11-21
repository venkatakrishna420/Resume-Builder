//This is a React **Error Boundary fallback component** that displays a full-page error UI with an 
// illustration and a “Go to Home” button. It uses `useNavigate` to programmatically redirect the 
// user to the home page while also resetting the error boundary.

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../constant";

function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.error("Resume Builder render error:", error);
  }, [error]);

  const goHome = () => {
    resetErrorBoundary();
    navigate(ROUTES_PATH.HOME);
  };

  return (
    <div
      role="alert"
      className="
        min-h-screen
        flex flex-col
        items-center 
        justify-between
        p-10
      "
    >
      <div className="flex justify-center items-center h-[80vh] w-full">
        <img
          src="https://files.catbox.moe/ubzvn1.svg"
          alt="Error Illustration"
          className="h-full object-contain drop-shadow-xl"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        <img src="https://files.catbox.moe/6ykago.png" alt="Error Icon" className="w-10 h-10" />
        Something went wrong
      </h2>

      {import.meta.env.DEV && error?.message && (
        <pre className="max-w-3xl overflow-auto rounded bg-red-50 p-4 text-left text-sm text-red-800">
          {error.message}
        </pre>
      )}



      <button
        onClick={goHome}
        className="
          bg-blue-600 hover:bg-blue-700 
          text-white font-bold py-3 px-6 
          rounded-lg shadow-lg 
          transition transform hover:scale-105 text-center
        "
      >
        Go to Home
      </button>
    </div>
  );
}

export default ErrorFallback;
