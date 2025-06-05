import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { FormHelper } from "./FormHelper";

const FormsInput = ({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  options,
  icon, // Add icon prop
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  let capitalizedFieldName = name.charAt(0).toUpperCase() + name.slice(1);

  if (capitalizedFieldName.includes("_")) {
    capitalizedFieldName = capitalizedFieldName.replace(/_/g, " ");
  }

  const minLength = FormHelper.MinLengthCalculator(name);

  return (
    <>
      {type === "select" ? (
        <div className="relative flex items-center border border-[#ddd] rounded-md focus-within:border-[#5252ff]">
          {icon && <span className="flex items-center pl-3">{icon}</span>}
          <Controller
            control={control}
            rules={{
              required: `${capitalizedFieldName} field cannot be empty!`,
              minLength: {
                value: minLength,
                message: `${capitalizedFieldName} must be at least ${minLength} characters long.`,
              },
            }}
            name={name}
            render={({ field }) => (
              <select
                {...field}
                type={type}
                placeholder={placeholder}
                value={value ? value : field.value || ""}
                className={`block w-full font-serif py-2 outline-none rounded-md ${
                  icon ? "pl-10" : "px-5"
                }`} // Adjust padding if icon is present
              >
                <option value="d"> --- Please Select --- </option>
                {options?.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      ) : (
        <div
          // style={{ border: "1px solid red" }}
          className="relative flex bg-white items-center border border-[#ddd] rounded-md focus-within:border-[#5252ff]"
        >
          {icon && (
            <span
              className="flex items-center pl-3"
              // style={{ border: "1px solid red" }}
            >
              {icon}
            </span>
          )}
          <Controller
            control={control}
            rules={{
              required: `${capitalizedFieldName} field cannot be empty!`,
              minLength: {
                value: minLength,
                message: `${capitalizedFieldName} must be at least ${minLength} characters long.`,
              },
            }}
            name={name}
            render={({ field }) => (
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                value={value ? value : field.value || ""}
                className={`block w-full font-serif py-2 outline-none rounded-md ${
                  icon ? "px-5" : "px-5"
                }`} // Adjust padding if icon is present
              />
            )}
          />
        </div>
      )}

      {errors[name] && (
        <p className="text-red-600 font-medium mt-2 ml-0 font-serif text-[14px] flex items-center">
          <BiErrorCircle className="mr-1" /> Error : {errors[name]?.message}
        </p>
      )}
    </>
  );
};

export default FormsInput;
