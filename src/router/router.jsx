
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import AnimationTest from '../pages/AnimationTest/AnimationTest';
import AuthLayout from '../Authentication/AuthLayout';
import JobDetails from '../pages/Job/JobDetails';

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Page Not Found</h2>,
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
                path: "/animationTest",
                element: <AnimationTest></AnimationTest>
            },
            {
                path: '/jobDetails/:id',
                element: <JobDetails></JobDetails>


                ,
                loader: async ({ params }) => {
                    const paramsData = await fetch("http://localhost:3000/jobs")
                    const data = await paramsData.json();
                    const singleData = data.find(d => d._id == params.id)
                    return singleData;
                }
            },
            {
                path: "/authentication",
                element: <AuthLayout></AuthLayout>,
                children: [

                    {
                        path: "login",
                        element: <SignIn></SignIn>
                    },
                    {
                        path: "register",
                        element: <Register></Register>
                    },

                ]

            }
        ]

    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [



        ]

    }

]);

export default router;
