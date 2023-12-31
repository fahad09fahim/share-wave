import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Media from "../pages/Media/Media";
import Home from '../pages/Home/Home/Home'
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/media',
          element:<Media/>,
        
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:"/details/:id",
          element:<Details/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ]
    },

  ]);

  export default router