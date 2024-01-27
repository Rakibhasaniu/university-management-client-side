import { Button, Layout } from 'antd';

import {Outlet } from 'react-router-dom';

import SideBar from './SideBar';
import { useAppDispatch } from '../../redux/features/hooks';
import { logOut } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';





const { Header, Content, Footer } = Layout;


// const items : MenuProps['items'] = [
//   {
//     key:'Dashboard',
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink> 
//   },
//   {
//     key:'2',
//     label:'Profile',
//   },
//   {
//     key:'3',
//     label:'User Management',
//     children:[
//       {
//         key:'Create Admin',
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink> 
//       },
//       {
//         key:'Create Faculty',
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink> 
//       },
//       {
//         key:'Create Student',
//         label: <NavLink to="/admin/create-student">Create Student</NavLink> 
//       },
      
//     ]
//   }
// ]





const MainLayout = () => {
  const dispatch = useAppDispatch()
  const handleLogout =() => {
    dispatch(logOut())
    toast.success('Logged Out')
  }
    return (
      <Layout style={{height: "100vh"}}>
        <SideBar />
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    );
};

export default MainLayout;