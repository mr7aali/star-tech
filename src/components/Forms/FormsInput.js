import React from 'react';
import { useFormContext, Controller } from "react-hook-form"
import { BiErrorCircle } from "react-icons/bi";
import { FormHelper } from './FormHelper';
const FormsInput = (
    { name, type, value, id, placeholder, validation, options }
) => {
    const { control, formState: { errors } } = useFormContext();
    const capitalizedFieldName = name.charAt(0).toUpperCase() + name.slice(1);


    const minLength = FormHelper.MinLengthCalculator(name);
    return (
        <>

            {
                type === "select" ?
                    <Controller
                        control={control}
                        rules={{
                            required: `${capitalizedFieldName} field cannot be empty!`,
                            minLength: {
                                value: minLength,
                                message: `${capitalizedFieldName} must be at least ${minLength} characters long.`
                            }
                        }}
                        name={name}

                        render={({ field }) => (
                            <select {...field}
                                type={type}
                                placeholder={placeholder}
                                value={value ? value : field.value || ""}
                                style={{ style: '1px solid red' }}

                                className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-'
                            >
                                <option value="d" > --- Please Select --- </option>
                                {
                                    options?.map(op => (
                                        <option key={op}
                                            value={op}

                                        > {op} </option>
                                    )

                                    )
                                }
                            </select>

                        )}
                    />
                    :


                    < Controller
                        control={control}
                        rules={{
                            required: `${capitalizedFieldName} field cannot be empty!`,
                            minLength: {
                                value: minLength,
                                message: `${capitalizedFieldName} must be at least ${minLength} characters long.`
                            }
                        }}
                        name={name}

                        render={({ field }) => (
                            <input {...field}
                                type={type}
                                placeholder={placeholder}
                                value={value ? value : field.value || ""}
                                style={{ style: '1px solid red' }}

                                className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-'
                            />

                        )}
                    />
            }
                    

                 


            




            {errors[name] &&
                <p className="text-red-600 font-medium mt-2 ml-0 font-serif text-[14px] flex items-center">
                    <BiErrorCircle className='mr-1' />   Error :   {errors[name]?.message}
                </p>
            }
        </>
    );
};

export default FormsInput;