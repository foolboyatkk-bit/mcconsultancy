import { useRouteError, Link } from "react-router-dom";

export default function GlobalErrorBoundary() {
  const error = useRouteError() as { status?: number; statusText?: string; message?: string } | Error;
  console.error("Caught by Error Boundary:", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      
      {/* This checks if it's a 404 or a different type of error */}
      <p className="text-lg mb-6">
        {('status' in error && error.status === 404) 
          ? "The page you are looking for doesn't exist." 
          : "An unexpected error occurred."}
      </p>

      {/* Displays the technical error message for debugging */}
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200 text-sm font-mono text-gray-600 mb-8 max-w-lg w-full overflow-x-auto">
        <i>{('statusText' in error ? error.statusText : undefined) || error.message}</i>
      </div>

      <Link 
        to="/" 
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}