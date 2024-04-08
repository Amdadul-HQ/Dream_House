import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contract from "../Pages/Contract/Contract";
import HouseDetails from "../Pages/HouseDetails/HouseDetails";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateComponent from "../Component/Private/PrivateComponent";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                loader:async() => await fetch('/property.json'),
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contract',
                element:<Contract/>
            },
            {
                path:'/house/:id',
                loader: async() => await fetch('/property.json'),
                element:<PrivateComponent><HouseDetails/></PrivateComponent>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])