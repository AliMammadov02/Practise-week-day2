import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Add from './Components/Add/Add'
import Home from "./Components/Home/Home"


import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>, 
    children:[
        {
            path:"/",
            element:<App/>
        },
        {
            path:"/add",
            element:<Add/>
        }
    ]
  },
]);


createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

