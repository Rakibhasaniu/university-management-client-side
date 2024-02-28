// import { Button, Row } from 'antd';
// import { FieldValues } from 'react-hook-form';
// import { useLoginMutation } from '../redux/features/auth/authApi';
// import { useAppDispatch } from '../redux/hooks';
// import { TUser, setUser } from '../redux/features/auth/authSlice';
// import { verifyToken } from '../utils/verifyToken';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: 'A-0002',
  //     password: 'admin123',
  //   },
  // });

  const defaultValues = {
    id: 'A-0001',
    password: 'admin123456789',
  };

//   const [login] = useLoginMutation();

//   const onSubmit = async (data: FieldValues) => {
//     console.log(data);
//     const toastId = toast.loading('Logging in');

//     try {
//       const userInfo = {
//         id: data.userId,
//         password: data.password,
//       };
//       const res = await login(userInfo).unwrap();
//       const user = verifyToken(res.data.accessToken) as TUser;
//       dispatch(setUser({ user: user, token: res.data.accessToken }));
//       toast.success('Logged in', { id: toastId, duration: 2000 });
//       navigate(`/${user.role}/dashboard`);
//     } catch (err) {
//       toast.error('Something went wrong', { id: toastId, duration: 2000 });
//     }
//   };
    const {register,handleSubmit}  = useForm({
        defaultValues
    })
    const [login,{data,error}] = useLoginMutation();
    console.log("data",data)
    console.log("error",error)
    const onSubmit = (data) => {
        const userInfo = {
            id:data.id,
            password:data.password,
        }
        login(userInfo)
    }
  return (
    // <Row justify="center" align="middle" style={{ height: '100vh' }}>
    //   <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
    //     <PHInput type="text" name="userId" label="ID:" />
    //     <PHInput type="text" name="password" label="Password" />
    //     <Button htmlType="submit">Login</Button>
    //   </PHForm>
    // </Row>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="id">ID:</label>
            <input type="text"  id="id" {...register('id')} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text"  id="password"  {...register('password')}/>
        </div>
        <Button htmlType="submit" >Login</Button>
    </form>
  );
};

export default Login;
