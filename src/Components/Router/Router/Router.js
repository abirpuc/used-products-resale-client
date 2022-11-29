import { createBrowserRouter } from "react-router-dom";
import CategoryLayout from "../../Layout/CategoryLayout";
import Main from "../../Layout/Main";
import MyBooking from "../../Pages/Booking/MyBooking";
import CategoryProducts from "../../Pages/Home/Categories/CategoryData/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Products from "../../Pages/Products/Products";
import SingUp from "../../Pages/SingUp/SingUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/mybooking',
                element:<PrivateRouter><MyBooking></MyBooking></PrivateRouter>
            }
        ]
    },
    {
        path: '/',
        element: <CategoryLayout></CategoryLayout>,
        children: [
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/category/:category_id',
                element: <CategoryProducts></CategoryProducts>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.category_id}`)
            }
        ]
    },
    {
        path:'/*',
        element: <NotFound></NotFound>
    }
])

export default router