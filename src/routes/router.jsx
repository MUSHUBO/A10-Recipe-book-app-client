import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/Error/NotFound";
import AllRecipes from "../pages/AllRecipes/AllRecipes";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import MyRecipes from "../pages/MyRecipes/MyRecipes";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import PrivateRoute from "../pages/provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('https://a10-recipe-book-app-server-lilac.vercel.app/top-recipes'),
                Component: Home
            },
            {
                path: "/recipe/:id",
                loader: ({params}) => fetch(`https://a10-recipe-book-app-server-lilac.vercel.app/recipes/${params.id}`),
                element: (
                    <PrivateRoute>
                        <RecipeDetails></RecipeDetails>
                    </PrivateRoute>
                )
            },
            {
                path: "/allRecipes",
                loader: () => fetch('https://a10-recipe-book-app-server-lilac.vercel.app/recipes'),
                Component: AllRecipes
            },
            {
                path: "/addRecipe",
                Component: AddRecipe
            },
            {
                path: "/myRecipes",
                element: (
                    <PrivateRoute>
                        <MyRecipes></MyRecipes>
                    </PrivateRoute>
                )
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