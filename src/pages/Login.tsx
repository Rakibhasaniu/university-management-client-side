import { Button, Row } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LForm from "../components/form/LForm";
import LFinput from "../components/form/LFinput";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    // const {register,handleSubmit}  =  useForm({
    //     defaultValues:{
    //         userId:'A-0002',
    //         password:'admin123'
    //     }
    // })
    // const {register} = useFormContext();

    const [login] = useLoginMutation()

    // console.log('data=>',data)
    // console.log('error=>',error)
    const onSubmit = async(data:FieldValues) => {
        console.log(data)
        const toastId = toast.loading('Logging In')
        try{
            const userInfo = {
                id: data.userId,
                password: data.password
            }
    
            const res = await login(userInfo).unwrap()
            const user = verifyToken(res.data.accessToken) as TUser;
            console.log(user)
            dispatch(setUser({user:user, token:res.data.accessToken}))
            toast.success("logged In",{id: toastId});
            navigate(`/${user.role}/dashboard`)
        } catch (err) {
            toast.error("Something Went Wrong",{id: toastId})
        }
    }
    return (
        <Row justify="center" align="middle" style={{height:"100vh"}}>
        <LForm onSubmit={onSubmit}>
            <div>
                {/* <label htmlFor="id">ID:</label> */}
                {/* <input type="text" id='id' {...register('userId')} /> */}
                <LFinput type="text" name="userId" label="ID:" />
            </div>
            <div>
                {/* <label htmlFor="password">PASSWORD:</label> */}
                {/* <input type="text" id='password' {...register('password')} /> */}<LFinput type="text" name="password" label="PASSWORD:" />
            </div>
            <Button htmlType="submit">Login</Button>
        </LForm>
        </Row>
    );
};

export default Login;