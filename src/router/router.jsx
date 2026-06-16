
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import AnimationTest from '../pages/AnimationTest/AnimationTest';

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<h2>Page Not Found</h2>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/job",
                element: <h2>Create New Job Project</h2>
            
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <SignIn></SignIn>
            },
            {
                path: "/animationTest",
                element: <AnimationTest></AnimationTest>
            }
        ]

    },


]);

export default router;
