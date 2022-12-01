import { createBrowserRouter } from "react-router-dom";
import AllCustomer from "../../Admin/AllCustomer/AllCustomer";
import AllSeller from "../../Admin/AllSeller/AllSeller";
import DashBoard from "../../Admin/DashBoard/DashBoard";
import CategoryLayout from "../../Layout/CategoryLayout";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import MyBooking from "../../Pages/Booking/MyBooking";
import CategoryProducts from "../../Pages/Home/Categories/CategoryData/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Products from "../../Pages/Products/Products";
import SingUp from "../../Pages/SingUp/SingUp";
import AddProducts from "../../Seller/AddProducts/AddProducts";
import MyProducts from "../../Seller/MyProducts/MyProducts";
import UpdateProduct from "../../Seller/UpdateProduct/UpdateProduct";
import AdminPirvateRoute from "../AdminPrivateRoute/AdminPirvateRoute";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SellerRoute from "../SellerRoute/SellerRoute";


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
            },
            {
                path:'/addproduct',
                element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path:'/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/products/:id',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    {
        path:'/',
        element:<Main></Main>,
        children:[]
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
        path:'/dashboard',
        element:<PrivateRouter><DashBoardLayout></DashBoardLayout></PrivateRouter>,
        children:[
            {
                path:'/dashboard',
                element: <AdminPirvateRoute><DashBoard></DashBoard></AdminPirvateRoute>
            },
            {
                path:'/dashboard/allseller',
                element:<AllSeller></AllSeller>
            },
            {
                path:'/dashboard/allcustomer',
                element:<AllCustomer></AllCustomer>
            }
        ]
    },
    {
        path:'/*',
        element: <NotFound></NotFound>
    }
])

export default router