import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <h1>sidebar</h1>
            <Outlet />
        </div>
    );
};

export default AdminLayout;