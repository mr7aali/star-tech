import React from 'react';

import { useForm } from "react-hook-form";
import image1 from "./../../public/image1.png";
import image2 from "./../../public/image2.png";
import image3 from "./../../public/image3.png";;
import logo from "@/../../public/logo.png";
import { useEffect, useState } from "react";
import Image from 'next/image';



const LoginRegister = () => {




  const [whichSlide, setWhichSlide] = useState(0);
  const [toggle, setToogle] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const { handleSubmit, register } = useForm();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (e.target.value) {
      setIsFocused(true);
    }
  };

  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = (e) => {
    setIsFocused2(false);
    if (e.target.value) {
      setIsFocused2(true);
    }
  };
  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur3 = (e) => {
    setIsFocused3(false);
    if (e.target.value) {
      setIsFocused3(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWhichSlide((prevValue) => {
        if (prevValue === 3) {
          prevValue = 0;
        }

        let result = prevValue + 1;

        if (result > 3) {
          result = 3;
        }
        return result;
      });
    }, 2000); // Change slide every 2 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  // --------------------------------------------------------------------------
  const handle_FormSingIn = async (data) => {
    const email = data.email_SignIn;
    const password = data.password_SignIn;

    console.log(email, password);

  };
  const handle_FormRegister = (data) => {
    console.log(data);
  }
  // --------------------------------------------------------------------------

  return (
    <div className='bg-[#f2f4f8]'>
      <main className={toggle ? "sign-up-mode" : ""}>
        <div className='box'>
          <div className='inner-box'>
            <div className='forms-wrap'>
              {/* -------------------------Sing In from Out----------------------- */}
              <form
                onSubmit={handleSubmit(handle_FormSingIn)}
                action='index.html'
                autoComplete='off'
                className='sign-in-form '>
                <div className='logo'>
                  <Image src={logo} alt='easyclass' />
                  <h4>easyclass</h4>
                </div>

                <div className='heading'>
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet?</h6>
                  <a
                    href='#'
                    onClick={() => setToogle(!toggle)}
                    className='toggle ml-2 text-[red]'>
                    Sign up
                  </a>
                </div>

                <div className='actual-form'>
                  <div className='input-wrap'>
                    <input
                      type='email'
                      minLength='4'
                      {...register("email_SignIn")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`input-field ${isFocused ? "active" : ""}`}
                      autoComplete='off'
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className='input-wrap'>
                    <input
                      type='password'
                      minLength='4'
                      {...register("password_SignIn")}
                      className={`input-field ${isFocused2 ? "active" : ""}`}
                      onFocus={handleFocus2}
                      onBlur={handleBlur2}
                      autoComplete='off'
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type='submit' value='Sign In' className='sign-btn bg-black' />

                  <p  className='text'>
                    Forgotten your password or you login datails?
                    <a href='#'>Get help</a> signing in
                  </p>
                </div>
              </form>
              {/* -------------------------Sing In from end----------------------- */}
              <form
                onSubmit={handleSubmit(handle_FormRegister)}
                action='index.html'
                autoComplete='off'
                className='sign-up-form'>
                <div className='logo'>
                  <Image src={logo} alt='easyclass' />
                  <h4>easyclass</h4>
                </div>

                <div className='heading'>
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a
                    href='#'
                    className='toggle ml-2 text-[red]'
                    onClick={() => setToogle(!toggle)}>
                    Sign in
                  </a>
                </div>

                <div className='actual-form'>
                  <div className='input-wrap'>
                    <input
                      type='text'
                      minLength='4'
                      {...register("Name_Resister")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`input-field ${isFocused ? "active" : ""}`}
                      autoComplete='off'
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className='input-wrap'>
                    <input
                      type='email'
                      {...register("email_Resister")}
                      onFocus={handleFocus2}
                      onBlur={handleBlur2}
                      className={`input-field ${isFocused2 ? "active" : ""}`}
                      autoComplete='off'
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className='input-wrap'>
                    <input
                      type='password'
                      minLength='4'
                      {...register("password_Resister")}
                      onFocus={handleFocus3}
                      onBlur={handleBlur3}
                      className={`input-field ${isFocused3 ? "active" : ""}`}
                      autoComplete='off'
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type='submit' value='Sign Up' className='sign-btn bg-black' />

                  <p className='text'>
                    By signing up, I agree to the
                    <a href='#'>Terms of Services</a> and
                    <a href='#'>Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>

            <div className='carousel'>
              <div className='images-wrapper'>
                <Image
                  src={image1}
                  className={`image img-1 ${whichSlide === 1 ? "show" : ""} `}
                  alt=''
                />
                <Image
                  src={image2}
                  className={`image img-2 ${whichSlide === 2 ? "show" : ""} `}
                  alt=''
                />
                <Image
                  src={image3}
                  className={`image img-3 ${whichSlide === 3 ? "show" : ""} `}
                  alt=''
                />
              </div>

              <div className='text-slider'>
                <div className='text-wrap'>
                  <div
                    style={{
                      transform: `translateY(${-(whichSlide - 1) * 2.2}rem)`,
                    }}
                    className='text-group'>
                    <h2>Create your own courses</h2>
                    <h2>Customize as you like</h2>
                    <h2>Invite students to your class</h2>
                  </div>
                </div>

                <div className='bullets'>
                  <span
                    className={`${whichSlide === 1 ? "active" : ""}`}
                    data-value='1'
                    onClick={() => setWhichSlide(1)}></span>
                  <span
                    className={`${whichSlide === 2 ? "active" : ""}`}
                    data-value='2'
                    onClick={() => setWhichSlide(2)}></span>
                  <span
                    className={`${whichSlide === 3 ? "active" : ""}`}
                    data-value='3'
                    onClick={() => setWhichSlide(3)}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginRegister;
