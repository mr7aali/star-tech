"use client";
/* eslint-disable react/no-unescaped-entities */
import Forms from "@/components/Forms/Forms";
import FormsInput from "@/components/Forms/FormsInput";
import HeadTag from "@/components/sheared/HeaderTag";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { BiSolidCommentError } from "react-icons/bi";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const onSubmit = async (data) => {
    setError(false);
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      alert("Login success");
      window.location.href = "/user-ac";
    } else {
      setError(true);
      // alert("Login failed");
    }
  };
  return (
    <section className="p-2">
      <HeadTag
        descriptionContent={"Star Tech Login page"}
        title={"Account Login"}
      />
      <div className="max-w-[400px] mx-auto mt-16 mb-24">
        {error && (
          <div className="flex items-center px-3 py-4 mb-4 bg-red-100 rounded-md">
            <span className="text-[23px] pr-3 text-[red]">
              {" "}
              <BiSolidCommentError />{" "}
            </span>
            <span className="font-thin font-serif text-[14px] sm:text-[15px] leading-none">
              Warning: No match for Phone Number and/or Password.
            </span>
          </div>
        )}

        <h1 className="font-serif font-bold text-[20px]">Account Login</h1>
        <Forms submitHandler={onSubmit}>
          <div>
            <label
              htmlFor=""
              className="font-serif text-[14px] mt-5 mb-2 block"
            >
              Phone / E-Mail
            </label>
            <FormsInput
              name={"email"}
              type="email"
              placeholder="Phone / E-Mail"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
            >
              <span> Password</span>
              <span className="text-red-600 underline cursor-pointer hover:no-underline">
                {" "}
                Forgotten Password?
              </span>
            </label>
            <FormsInput
              name={"password"}
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="mt-5">
            <button className="block w-full pt-4 btn" type="submit">
              {" "}
              Login
            </button>
          </div>

          <p className="w-full mt-5 mb-2">
            <span>Don't have an account?</span>
          </p>

          <Link href="/auth/register" className="w-full btn st-outline">
            Create Your Account
          </Link>
        </Forms>
      </div>
    </section>
  );
};

export default LoginPage;
