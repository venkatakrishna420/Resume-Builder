import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../constant";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 pt-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">404</p>
      <h1 className="text-3xl font-bold text-gray-900">Page not found</h1>
      <p className="max-w-md text-gray-600">That address does not match a page in the resume builder.</p>
      <button
        type="button"
        onClick={() => navigate(ROUTES_PATH.HOME)}
        className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Go to homepage
      </button>
    </main>
  );
}
