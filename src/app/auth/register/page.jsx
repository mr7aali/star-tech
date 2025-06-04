"use client";
/* eslint-disable react/no-unescaped-entities */
import UseCameraForCapture from "@/components/AuthPage/UseCameraForCapture";
import Forms from "@/components/Forms/Forms";
import FormsInput from "@/components/Forms/FormsInput";
import HeadTag from "@/components/sheared/HeaderTag";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useState } from "react";
import { BiSolidCommentError } from "react-icons/bi";
const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMassge, setErrorMassge] = useState(false);

  const onSubmit = async (data) => {
    const baseURL = "https://star-tech-back-end.vercel.app";
    const res = await fetch(`${baseURL}/api/v1/user/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.success === true) {
      router.push("/auth/login");
      setError(false);
    } else {
      const Massge = result.errorMessages[0].message;
      setErrorMassge(Massge);
      setError(true);
    }
  };
  return (
    <section className="p-2">
      <HeadTag
        descriptionContent={"Star Tech Register page"}
        title={"Register Account"}
      />
      <div className="max-w-[400px] mx-auto mt-16 mb-24">
        {error && (
          <div className="flex items-center px-3 py-4 mb-4 bg-red-100 rounded-md">
            <span className="text-[23px] pr-3 text-[red]">
              {" "}
              <BiSolidCommentError />{" "}
            </span>
            <span className="font-thin font-serif text-[14px] sm:text-[15px] leading-none">
              Warning:
              {/* No match for Phone Number and/or Password. */}
              {" " + errorMassge}
            </span>
          </div>
        )}
        <h1 className="font-serif font-bold text-[20px]">Register Account</h1>
        <div
          className="flex justify-center"
          style={{ border: "1px solid red" }}
        >
          <UseCameraForCapture />
        </div>
        <Forms submitHandler={onSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor=""
                className="font-serif text-[14px] mt-5 mb-2 block"
              >
                First Name
              </label>
              <FormsInput
                name="first_name"
                type="text"
                // placeholder='Phone / E-Mail'
                placeholder={"First name"}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
              >
                Last Name
              </label>
              <FormsInput
                name={"last_name"}
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="font-serif text-[14px] mt-5 mb-2 block"
            >
              E-Mail
            </label>
            <FormsInput name={"email"} type="email" placeholder="E-Mail" />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
            >
              Telephone
            </label>
            <FormsInput name={"phone"} type="text" placeholder="Phone" />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
            >
              Passwoard
            </label>
            <FormsInput
              name={"password"}
              type="password"
              placeholder="password"
            />
          </div>
          <div className="mt-5">
            <button className="block w-full pt-4 btn" type="submit">
              {" "}
              Continue
            </button>
          </div>

          <p className="w-full mt-5 mb-2">
            <span>Already have an account?</span>
          </p>

          <Link href="/auth/login" className="w-full btn st-outline">
            login page
          </Link>
        </Forms>
      </div>
    </section>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
