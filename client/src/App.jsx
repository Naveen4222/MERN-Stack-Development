import {createBrowserRouter,  RouterProvider } from "react-router-dom";
import { MainLayout } from "./Component/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Service } from "./Pages/Service";
import { Contact } from "./Pages/Contact";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Error } from "./Pages/Error";
import { LogOut } from "./Pages/Logout";

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/service",
      element:<Service/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/logout",
      element:<LogOut/>
    },
    {
      path:"*",
      element:<Error/>
    }
    
  ]
  }
])

export const App = ()=>{
  return(
  <RouterProvider router={router}/>
  )
}