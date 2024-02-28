import App from "@/App";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

import Registration from "@/pages/Registration";
import { routeGenerator } from "@/utils/route.generator";
import { adminPaths } from "./admin.route";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from './student.route';
import protectedRoute from '../components/layout/ProtectedRoute'



const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
    },
    
    {
        path:'/admin',
        element: (
            <protectedRoute><App /></protectedRoute>
        ),
        children:routeGenerator(adminPaths)
        
    },
    {
        path:'/faculty',
        element: <App />,
        children:routeGenerator(facultyPaths)
        
    },
    {
        path:'/student',
        element: <App />,
        children:routeGenerator(studentPaths)
        
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