
import PHForm from "@/components/form/UniForm";
import PHInput from "@/components/form/UniInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/features/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispacth = useAppDispatch();
  const defaultValues = {
    id:'A-0001',
    password:'admin123456789',
  }
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
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues} >
        <PHInput type="text" name="id" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //         <label htmlFor="id">ID:</label>
    //         <input type="text"  id="id" {...register('id')} />
    //     </div>
    //     <div>
    //         <label htmlFor="password">Password:</label>
    //         <input type="text"  id="password"  {...register('password')}/>
    //     </div>
    //     <Button htmlType="submit" >Login</Button>
    // </form>
  );
};

export default Login;
