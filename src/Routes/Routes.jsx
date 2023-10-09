import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import Service from "../components/Service/Service";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog/Blog";



const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/services.json'),
            },
            {
                path:'/service',
                element:<Service></Service>,
                loader: () => fetch('/services.json'),

            },
            {
                path:'/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'/service/:id',
                loader: () => fetch('/services.json'),
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/about',
                element:<About></About>,
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }


        ]
    }
]);

export default router;