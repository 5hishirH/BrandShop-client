import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import MyCart from "./Pages/MyCart";
import Login from "./Pages/Login";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProducts',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default Router;