import { createBrowserRouter } from "react-router-dom";
import CategoryLayout from "../../Layout/CategoryLayout";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SingUp from "../../Pages/SingUp/SingUp";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<SingUp></SingUp>
            }
        ]
    },
    {
        path:'/products',
        element:<CategoryLayout></CategoryLayout>,
        children:[
            {
                path:'/products',
                element:<Products></Products>
            }
        ]
    }
])

export default router