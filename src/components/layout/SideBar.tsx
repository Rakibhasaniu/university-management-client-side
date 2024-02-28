import { adminPaths } from "@/routes/admin.route";
import { facultyPaths } from "@/routes/faculty.route";
import { studentPaths } from "@/routes/student.route";
import { sidebarItemsGenerator } from "@/utils/sidebar.generator";
import { Menu } from "antd";
import {  Layout } from 'antd';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

const Sidebar = () => {
  const role = 'admin'
  // const user = useAppSelector(selectCurrentUser);

  let sidebarItems;
//   const sidebarItems: MenuProps['items'] = [
//     {
//     key:'Dashboard',
//     label:<NavLink to="/admin/dashboard"> Dashboard</NavLink>,
//     },
//     {
//     key:'User Management',
//     label:'User Management',
//     children:[
//       {
//         key:'Create Student',
//         label: <NavLink to='/admin/create-student'> Create Student </NavLink>
//       },
//       {
//         key:'Create Admin',
//         label: <NavLink to='/admin/create-admin'> Create Admin </NavLink>
//       },
//       {
//         key:'Create Faculty',
//         label: <NavLink to='/admin/create-faculty'> Create Faculty </NavLink>
//       },
//     ]
//     },
//     {
//     key:'faculty',
//     label:'Faculty',
//     },
// ]

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
    >
      <div
        style={{
          color: 'white',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
