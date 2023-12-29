import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import PostDetails from "../../pages/PostDetails";
import CreatePost from "../../pages/CreatePost";
import EditPost from "../../pages/EditPost";
import Profile from "../../pages/Profile";

const MainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/posts/post/:id',
                element: <PostDetails/>
            },
            {
                path: '/write',
                element: <CreatePost/>
            },
            {
                path: '/edit/:id',
                element: <EditPost/>
            },
            {
                path: '/profile/:id',
                element: <Profile/>
            }
        ]
    }
])

export default MainRoute