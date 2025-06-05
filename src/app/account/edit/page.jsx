"use client";
import CardSIdeBar from "@/components/ui/CardSIdeBar";
import { getUserInfo } from "@/service/auth.service";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaEnvelope, FaPhone, FaFax } from "react-icons/fa"; // Import icons
import FormsInput from "@/components/Forms/FormsInput";

const ProfileNavbar = dynamic(() =>
  import("@/components/AccountPages/AccountProfileNavbar")
);
// const FormsInput = dynamic(() => import("@/components/Forms/FormsInput"));
const Forms = dynamic(() => import("@/components/Forms/Forms"));

const EditPage = () => {
  const user = getUserInfo();
  const onSubmit = () => {};
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ProfileNavbar />
      <div className="max-w-[970px] mx-auto pb-10 px-5 lg:px-0">
        <h1 className="text-[#3749bb] text-2xl font-semibold font-sans">
          My Account Information
        </h1>
        <Forms submitHandler={onSubmit} defaultValues={user}>
          <div className="grid md:grid-cols-2">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="font-serif text-[14px] mt-5 mb-2 block"
                  >
                    First Name
                  </label>
                  <FormsInput
                    name="first_name"
                    type="text"
                    placeholder="First name"
                    icon={<FaUser className="text-gray-400" />} // Add user icon
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
                  >
                    Last Name
                  </label>
                  <FormsInput
                    name="last_name"
                    type="text"
                    placeholder="Last name"
                    icon={<FaUser className="text-gray-400" />} // Add user icon
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-serif text-[14px] mt-5 mb-2 block"
                >
                  E-Mail
                </label>
                <FormsInput
                  name="email"
                  type="email"
                  placeholder="E-Mail"
                  icon={<FaEnvelope className="text-gray-400" />} // Add email icon
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
                >
                  Telephone
                </label>
                <FormsInput
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  icon={<FaPhone className="text-gray-400" />} // Add phone icon
                />
              </div>
              <div>
                <label
                  htmlFor="fax"
                  className="font-serif text-[14px] mt-5 mb-2 flex justify-between"
                >
                  Fax
                </label>
                <FormsInput
                  name="fax"
                  type="text"
                  placeholder="Fax"
                  icon={<FaFax className="text-gray-400" />} // Add fax icon
                />
              </div>

              <div className="mt-5">
                <button type="submit" className="btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </Forms>
      </div>
      <CardSIdeBar
        open={open}
        setOpen={setOpen}
        cart={cart}
        dispatch={dispatch}
      />
    </>
  );
};

export default EditPage;
