import App from "@/App";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

import Registration from "@/pages/Registration";

import { adminRoutes } from "./admin.route";



const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
    },
    
    {
        path:'/admin',
        element: <App />,
        children:adminRoutes
        
    },
    {
        path:'/faculty',
        element: <App />,
        children:adminRoutes
        
    },
    {
        path:'/student',
        element: <App />,
        children:adminRoutes
        
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