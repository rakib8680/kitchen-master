import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../../../Milestone-10/Practice-Day-2/practice-auth/src/components/ErrorPage";
import Home from "../components/Home";
import HomeLayout from "../layouts/HomeLayout";





const route = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            }
        ]
    }
])


export default route;   