"use client";
/* eslint-disable react/no-unescaped-entities */
import UseCameraForCapture from "@/components/AuthPage/UseCameraForCapture";
import Forms from "@/components/Forms/Forms";
import FormsInput from "@/components/Forms/FormsInput";
import HeadTag from "@/components/sheared/HeaderTag";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidCommentError } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Fixed typo
  const [showCamera, setShowCamera] = useState(false); // Added for camera toggle

  const onSubmit = async (data) => {
    const res = await fetch(`http://localhost:5000/api/v1/user/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const res = await postRegister(data);
    const result = await res.json();

    if (result.success === true) {
      router.push("/auth/login");
      setError(false);
    } else {
      const [{ message }] = result.errorMessages; // Prefer object destructuring
      setErrorMessage(message);
      setError(true);
    }
  };

  return (
    <section className="p-2">
      <HeadTag
        descriptionContent="Star Tech Register page"
        title="Register Account"
      />
      <div className="max-w-[400px] mx-auto mt-16 mb-24">
        {/* {error && (
          <div className="flex items-center px-3 py-4 mb-4 bg-red-100 rounded-md">
            <span className="text-[23px] pr-3 text-[red]">
              <BiSolidCommentError />
            </span>
            <span className="font-thin font-serif text-[14px] sm:text-[15px] leading-none">
              Warning: {errorMessage}
            </span>
          </div>
        )} */}
        <h1 className="font-serif font-bold text-[20px] text-center">
          Register Account
        </h1>
        <div className="mt-4">
          <label
            htmlFor="camera-capture"
            className="block text-[14px] font-medium mb-2 text-center"
            style={{ color: "#666" }}
          >
            Capture Profile Photo
          </label>
          <div
            className="flex flex-col items-center w-full p-3 mx-auto border rounded-md shadow-sm"
            style={{ borderColor: "#3749bb" }}
          >
            {showCamera ? (
              <UseCameraForCapture />
            ) : (
              <div
                className="flex items-center justify-center w-full h-[300px] bg-gray-100 rounded-md"
                style={{ backgroundColor: "rgba(55, 73, 187, 0.1)" }}
              >
                <FaCamera className="text-3xl" style={{ color: "#666" }} />
              </div>
            )}
            <button
              type="button"
              onClick={() => setShowCamera(!showCamera)}
              className="mt-3 w-full py-2 px-4 text-[14px] font-medium rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-[#ef4a23]"
              style={{ backgroundColor: "#ef4a23", color: "#fff" }}
              aria-label={showCamera ? "Hide camera" : "Open camera"}
            >
              <span className="flex items-center justify-center gap-2">
                <FaCamera className="text-[16px]" />
                {showCamera ? "Hide Camera" : "Open Camera"}
              </span>
            </button>
          </div>
        </div>
        {error && (
          <div className="flex items-center px-3 py-4 mt-4 mb-4 bg-red-100 rounded-md">
            <span className="text-[23px] pr-3 text-[red]">
              <BiSolidCommentError />
            </span>
            <span className="font-thin font-serif text-[14px] sm:text-[15px] leading-none">
              Warning: {errorMessage}
            </span>
          </div>
        )}
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
                placeholder="First name"
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
                name="last_name"
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
            <FormsInput name="email" type="email" placeholder="E-Mail" />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
            >
              Telephone
            </label>
            <FormsInput name="phone" type="text" placeholder="Phone" />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
            >
              Password {/* Fixed typo */}
            </label>
            <FormsInput
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="mt-5">
            <button className="block w-full pt-4 btn" type="submit">
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
