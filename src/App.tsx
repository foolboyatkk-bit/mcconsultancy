import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalErrorBoundary from "./GlobalErrorBoundary";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import HowToChoose from "./pages/HowToChoose";
import Achivements from "./pages/Achivements";
import AboutUs from "./pages/AboutUs";
import Stavropol from "./pages/countries/russia/Stavropol";
import Volgograd from "./pages/countries/russia/Volgograd";
import Bukhara from "./pages/countries/uzbekistan/Bukhara";
import IIMechniKov from "./pages/countries/russia/IIMechniKov";
import Asia from "./pages/countries/uzbekistan/Asia";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <GlobalErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/how-to-choose",
        element: <HowToChoose />,
      },
      {
        path: "/achievements",
        element: <Achivements />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      { path: "/countries/russia/stavropol", element: <Stavropol /> },
      { path: "/countries/russia/volgograd", element: <Volgograd /> },
      { path: "/countries/russia/north-western", element: <IIMechniKov /> },

      { path: "/countries/uzbekistan/bukhara", element: <Bukhara /> },
      {
        path: "/countries/uzbekistan/asia",
        element: <Asia />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
