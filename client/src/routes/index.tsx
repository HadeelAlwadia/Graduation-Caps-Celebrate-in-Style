import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/register";
import Requests from "../pages/user/Requests";
import Home from "../pages/home";
import Products from "../pages/admin/products";
import Users from "../pages/admin/users";
import Profile from "../pages/user/Profile";
import Error from "../pages/error";
import Header from "../components/header";


export const routes = createBrowserRouter([
    { path: '/home', element: <Home /> },
    { path: '/auth/login', element: <Login /> },
    { path: '/auth/register', element: <Register /> },
    { path: '/user/:userId/profile', element: <><Header /><Profile /></> },
    { path: '/user/:userId/requests', element: <><Header /><Requests /></> },
    { path: '/admin/:userId/users', element: <><Header /><Users /></> },
    { path: '/admin/:userId/products', element: <><Header /><Products /></> },
    { path: '*', element: <Error /> }




]

)