import App from "@/App";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Registration from "@/pages/Registration";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import CreateStudent from "@/pages/admin/CreateStudent";
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";



const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'about',
                element:<About />
            },
            {
                path:'contact',
                element:<Contact />
            },
        ]
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/register',
        element:<Registration />
    },
    {
        path:'/admin',
        element: <App />,
        children: [
            {
                index: true,
                element: <AdminDashboard  />,
            },
            {
                path: 'dashboard',
                element: <AdminDashboard  />,
            },
            {
                path: 'create-student',
                element: <CreateStudent  />,
            },
            {
                path: 'create-admin',
                element: <CreateAdmin  />,
            },
            {
                path: 'create-faculty',
                element: <CreateFaculty  />,
            },
        ],
        
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/register',
        element:<Registration />
    },
])


export default router