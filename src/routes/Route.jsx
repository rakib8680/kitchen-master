import { createBrowserRouter, Navigate } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import RecipesDetails from "../components/RecipesDetails";
import Register from "../components/Register";
import HomeLayout from "../layouts/HomeLayout";
import LoginLayout from "../layouts/LoginLayout";





const route = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path : 'blog',
                element : <Blog></Blog>
            }
        ]
    },
    {
        path: "home",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader : () => fetch('http://localhost:5000/allData')
            }
        ]
    },
    

])


export default route;   