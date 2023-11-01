import React from 'react';
import { useFormContext, Controller } from "react-hook-form"
import { BiErrorCircle } from "react-icons/bi";
const FormsInput = (
    { name, type, value, id, placeholder, validation }
) => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <input {...field}
                        type={type}
                        placeholder={placeholder}
                        value={value ? value : field.value || ""}
                        // defaultValue={value}
                        className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' />

                )}
            />
            <p className="text-red-600 font-medium mt-2 ml-0 font-serif text-[14px] flex items-center">
                <BiErrorCircle className='mr-1' />   Error :   Message field cannot be empty
            </p>
        </>
    );
};

export default FormsInput;