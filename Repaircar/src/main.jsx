import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact.Jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Vehicle from './Pages/Vehicle';
import Cardinfo from './Components/CardInfo';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "vehicle",
    element: <Vehicle/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "/Vehicle/:Name",
    element: <Cardinfo/>,
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
