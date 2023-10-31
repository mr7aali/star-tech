import React from 'react';
import { useFormContext, Controller } from "react-hook-form"

const FormsInput = (
   { name, type,  value, id, placeholder, validation}
) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <input {...field}
                    type={type}
                   
                    placeholder={placeholder }
                    className='block rounded-md px-5 w-full font-serif py-2 outline-none focus:border-[#5252ff] border-[#ddd] border-[1px] rounded-' />

            )}
        />
    );
};

export default FormsInput;