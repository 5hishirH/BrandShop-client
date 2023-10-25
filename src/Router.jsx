import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import MyCart from "./Pages/MyCart";
import Login from "./Pages/Login";
import { AuthProvider } from "./AuthProvider";
import Register from "./Pages/Register";
import BrandDetails from "./Pages/BrandDetails";
import ProdDetails from "./Pages/ProdDetails";
import UpdateProd from "./Pages/UpdateProd";
import PrivateRoute from "./Pages/PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider><MainLayout></MainLayout></AuthProvider>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://brand-shop-server-hazel-nine.vercel.app/brands')
            },
            {
                path: '/brands/:id',
                element: <BrandDetails></BrandDetails>,
                loader: ({ params }) => fetch(`https://brand-shop-server-hazel-nine.vercel.app/brands/${params.id}`)
            },
            {
                path: '/addProducts',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProdDetails></ProdDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-hazel-nine.vercel.app/products/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProd></UpdateProd></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-hazel-nine.vercel.app/products/${params.id}`)
            }
        ]
    }
])

export default Router;