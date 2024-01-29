import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const LFinput = ({type, name,label}) => {
    const {register} = useFormContext();

    return (
    <div style={{marginBottom:'20px'}}>
    {label ? label:null}
    <Controller name={name} render={({field}) => (
        <Input {...field} type="text" id='name' />
    )} />
    </div>
    )
 
};

export default LFinput;