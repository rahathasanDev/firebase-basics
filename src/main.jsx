import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Layout/Home.jsx';
import Logim from './Layout/Logim.jsx';
import About from './Layout/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
    element: <Home></Home>, 
      },
      {
        path: "/login",
    element: <Logim></Logim>, 
      },
      {
        path: "/about",
    element: <About></About>, 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
