import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/Error/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                    path: "/auth/login",
                    Component: Login
                },
                {
                    path: "/auth/register",
                    Component: Register
                },
        ]
    },
    {
        path: "/*",
        Component: NotFound
    }
]);

export default router;