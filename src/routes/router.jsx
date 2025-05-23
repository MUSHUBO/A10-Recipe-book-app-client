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

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('http://localhost:3000/recipes'),
                Component: Home
            },
            {
                path: "/recipe/:id",
                loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
                Component: RecipeDetails
            },
            {
                path: "/allRecipes",
                loader: () => fetch('http://localhost:3000/recipes'),
                Component: AllRecipes
            },
            {
                path: "/addRecipe",
                Component: AddRecipe
            },
            {
                path: "/myRecipes",
                Component: MyRecipes
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