import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type LFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
    defaultValues: Record<string,any>
}

const LForm = ({onSubmit, children, defaultValues}:LFormProps) => {
    const methods = useForm({defaultValues});
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default LForm;