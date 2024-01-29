import { FormProvider, useForm } from "react-hook-form";



const LForm = ({onSubmit, children}) => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default LForm;