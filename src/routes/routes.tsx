import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'about',
                element: <About />
            },
            {
                path:'contact',
                element: <Contact />
            },
            
        ],
        
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/register',
        element: <Register />
    },
    {
        path:'/admin',
        element: <App />,
        children:[
            {
                path:'create-student',
                element: <CreateStudent />
            },
            {
                // path:'dashboard',
                index:true,
                element: <AdminDashboard />
            },
            {
                path:'dashboard',
                // index:true,
                element: <AdminDashboard />
            },
            
        ],
        
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/register',
        element: <Register />
    }
])

export default router;