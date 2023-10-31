import { useForm, FormProvider, useFormContext } from "react-hook-form"

const Forms = ({ children, submitHandler, defaultValues }) => {

    const formConfig = {}
    if (!!defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }


    const methods = useForm(formConfig);
    const { handleSubmit, reset } = methods


    const onSubmit = (data) => {
        submitHandler(data);
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