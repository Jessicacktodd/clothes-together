import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import './index.jsx'
import { LandingPage } from "./Pages/LandingPage/LandingPage.jsx";
import { WhoWeAre } from "./Pages/WhoWeAre/WhoWeAre.jsx"
import { WhatWeDo } from "./Pages/WhatWeDo/WhatWeDo.jsx";
import { FindOutMoreCharities } from "./Pages/FindOutMoreCharities/FindOutMoreCharities.jsx";
import { FindOutMoreBrands } from "./Pages/FindOutMoreBrands/FindOutMoreBrands.jsx";
import { Press } from "./Pages/Press/Press.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/WhoWeAre",
    element: <WhoWeAre />
  },

  {
    path: "/WhatWeDo",
    element: <WhatWeDo />
  },

  {
    path: "/FindOutMoreCharities",
    element: <FindOutMoreCharities />
  },

  {
    path: "/FindOutMoreBrands",
    element: <FindOutMoreBrands />
  },

  {
    path: "/Press",
    element: <Press />
  },

  

]);


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
