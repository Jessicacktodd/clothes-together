import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import './index.jsx'
import { LandingPage } from "./Pages/LandingPage/LandingPage.jsx";
import { WhoWeAre } from "./Pages/WhoWeAre/WhoWeAre.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/WhoWeAre",
    element: <WhoWeAre />
  }

]);


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
