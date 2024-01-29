import { Input } from "antd";
import { Controller } from "react-hook-form";
type LInputprops = {
    type: string;
    name: string;
    label?:string;
}
const LFinput = ({type, name,label}:LInputprops) => {
    // const {register} = useFormContext();

    return (
    <div style={{marginBottom:'20px'}}>
    {label ? label:null}
    <Controller name={name} render={({field}) => (
        <Input {...field} type={type} id={name} />
    )} />
    </div>
    )
 
};

export default LFinput;