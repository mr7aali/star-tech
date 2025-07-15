"use client";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineInboxIn } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import {
  MdOutlineElectricBolt,
  MdOutlineManageAccounts,
  MdLocalOffer,
} from "react-icons/md";
import { BarsOutlined, SearchOutlined } from "@ant-design/icons";
import { PiPlusMinusFill } from "react-icons/pi";
import { RiBuilding3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useGetCategoriesQuery } from "@/redux/api/baseApi";
import { useDispatch } from "react-redux";
import { setCategories } from "@/redux/features/categories/categoriesSlice";

const Sidebar = dynamic(() => import("../ui/SideBar"), { ssr: true });
const AccountLogOut = dynamic(() => import("./AccountLogOut"), { ssr: false });
const AccoutLogIn = dynamic(() => import("./AccoutLogIn"), { ssr: false });

const NavBar = ({ user }) => {
  const [open, setOpen] = useState(false);

  const [loginStatus, setLoginStatus] = useState(!!user);
  useEffect(() => {
    setLoginStatus(!!user);
  }, [user]);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetCategoriesQuery();
  if (!isLoading && data.success === true && data.data.length > 0) {
    dispatch(setCategories(data.data));
  }

  let NavMenuList;
  if (isLoading) {
    NavMenuList = (
      <li className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500">
        Loading...
      </li>
    );
  }
  if (isLoading === false && data.success === true && data.data.length > 0) {
    NavMenuList = data.data.map((li, key) => (
      <li
        key={key}
        className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500"
      >
        {li.title}
      </li>
    ));
  }

  return (
    <>
      <section className="fixed top-0 z-20 w-full bg-white shadow-lg lg:relative">
        <main className="flex items-center justify-center py-3 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="flex items-center justify-between w-full px-4 max-w-7xl">
            <div
              onClick={() => setOpen(!open)}
              className="p-2 text-white cursor-pointer lg:hidden"
            >
              <BarsOutlined className="text-2xl" />
            </div>

            <Link href="/" className="py-2">
              <Image
                src="https://www.startech.com.bd/image/catalog/logo.png"
                width={120}
                height={60}
                alt="Logo"
                className="object-contain"
              />
            </Link>

            <div className="relative flex-1 hidden mx-6 lg:flex">
              <input
                className="w-full h-10 px-4 text-gray-700 transition duration-200 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search products..."
                type="text"
              />
              <AiOutlineSearch className="absolute right-3 top-2.5 text-gray-500 text-xl cursor-pointer" />
            </div>

            <div className="items-center hidden space-x-6 lg:flex">
              <Link href="/admin-dashboard" className="flex items-center group">
                <HiOutlineInboxIn className="mr-2 text-xl text-orange-500 transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="font-medium text-white">Offers</h3>
                  <small className="text-xs text-gray-400">Latest Offers</small>
                </div>
              </Link>
              <div className="flex items-center cursor-pointer group">
                <MdOutlineElectricBolt className="mr-2 text-xl text-orange-500 transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="font-medium text-white">Gadget Fest</h3>
                  <small className="text-xs text-gray-400">Special Deals</small>
                </div>
              </div>
              {loginStatus ? <AccountLogOut /> : <AccoutLogIn />}

              <Link
                href="/builder"
                className="px-4 py-2 text-white transition duration-200 bg-orange-500 rounded-full hover:bg-orange-600"
              >
                PC Builder
              </Link>
            </div>

            <div className="flex space-x-2 lg:hidden">
              <SearchOutlined className="p-2 text-2xl text-white cursor-pointer" />
            </div>
          </div>
        </main>
        <Sidebar open={open} setOpen={setOpen} />
      </section>

      <nav className="sticky top-0 z-10 items-center justify-center hidden bg-white shadow-md lg:flex">
        <ul className="flex flex-wrap justify-center py-3">{NavMenuList}</ul>
      </nav>

      <footer className="fixed bottom-0 z-10 grid w-full grid-cols-5 gap-2 px-4 py-2 bg-gray-900 lg:hidden">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <MdLocalOffer className="text-lg text-white" />
          <small className="text-white text-[10px] pt-1 opacity-80">
            Offers
          </small>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <MdOutlineElectricBolt className="text-lg text-white" />
          <small className="text-white text-[10px] pt-1 opacity-80">
            Winter Fest
          </small>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <RiBuilding3Line className="text-lg text-white" />
          <small className="text-white text-[10px] pt-1 opacity-80">
            PC Builder
          </small>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <PiPlusMinusFill className="text-lg text-white" />
          <small className="text-white text-[10px] pt-1 opacity-80">
            Compare (0)
          </small>
        </div>
        <Link
          href="/auth/login"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <MdOutlineManageAccounts className="text-lg text-white" />
          <small className="text-white text-[10px] pt-1 opacity-80">
            Account
          </small>
        </Link>
      </footer>
    </>
  );
};

export default NavBar;
