import { useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form"

const Forms = ({ children, submitHandler, defaultValues }) => {

    const formConfig = {}
    if (!!defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }


    const methods = useForm(formConfig);
    const { handleSubmit, setError, reset, formState: { errors } } = methods
    const onSubmit = (data) => {
        submitHandler(data);
        console.log("Form data");


        reset();
    }


    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
};

export default Forms;