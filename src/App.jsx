import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {Country} from "./pages/Country"
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";


const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement: <ErrorPage />,
    children:[ {
        // path: "home",
        index: true,
        element: <Home />,
      },
      {
       path: "country",
       element: <Country />,
      },
       {
       path: "country/:id",
       element: <CountryDetails />,
      },
      {
       path: "about",
       element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  }
  
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};


export default App;
