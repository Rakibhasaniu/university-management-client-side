
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/features/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
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
    const dispacth = useAppDispatch();
    const {register,handleSubmit}  = useForm({
        defaultValues
    })
    const [login] = useLoginMutation();
   
    const onSubmit =async (data : FieldValues) => {
        const toastId = toast.loading('Logging In....')
        try{

          const userInfo = {
              id:data.id,
              password:data.password,
          }
          const res = await login(userInfo).unwrap();
          const user = verifyToken(res.data.accessToken) as TUser;
          // console.log(user);
  
          dispacth(setUser({user:user,token:res.data.accessToken}))
          toast.success('Logged In',{id: toastId, duration:2000})
          navigate(`/${user?.role}/dashboard`)
        } catch (err){
          toast.error('Check On Submit Login',{id: toastId, duration:2000})
        }
        
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
