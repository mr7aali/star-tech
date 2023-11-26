import Link from "next/link";
import { HiOutlineInboxIn } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineElectricBolt, MdOutlineManageAccounts } from "react-icons/md";
import Image from "next/image";
import { BarsOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { useState } from "react";
import dynamic from "next/dynamic";
// import Sidebar from "../ui/SideBar";
const Sidebar = dynamic(() => import('../ui/SideBar'),{ssr:true});

// const Sidebar = dynamic(() => import('../ui/Marquee'), { ssr: false });

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const NavMenuList = ["Desktop", "Laptop", "Component", "Monitor", "UPS",
        "Phone", "Tablet", "Office Equipment", "Camera", "Security", "Networking",
        "Software", "Server & Storage", "Accessories", "Gadget", "Gaming", "TV", "AC"
    ].map(li => (
        <li key={li} className="xl:mx-2 mx-1 py-4 text-[10px] xl:text-[12px] xl:font-serif font-bold  cursor-pointer hover:text-[#ef4a23]">
            {li}
        </li>
    ))

    return (
        <div  className="relative" style={{ boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.31)',}}>
            <div className="top bg-[#081621] flex justify-center items-center">
                <div className="mx-auto w-[1290px] flex items-center justify-between">

                    <div onClick={() => setOpen(!open)} className="pl-5 cursor-pointer lg:hidden">
                        <span className="p-2 text-[#fff] text-[25px] flex justify-center items-center"><BarsOutlined /></span>
                    </div>

                    <Link href={"/"} className="lg:mx-4 lg:py-3 py-2">
                        {/* <img className="w-[117px] " src="https://www.startech.com.bd/image/catalog/logo.png" alt="" srcSet="" /> */}
                        <Image
                            src="https://www.startech.com.bd/image/catalog/logo.png"
                            width={117}
                            height={92}
                            alt=""
                        />
                    </Link>

                    <div className="h-[42px]  hidden lg:block flex-1 rounded-sm ml-5 relative">
                        <input className=" w-full rounded-sm h-full p-[15px] outline-none" placeholder="Search" type="text" />

                        <AiOutlineSearch className="absolute right-0 top-2 cursor-pointer  text-[black] mr-4 text-2xl" />

                    </div>

                    <div className="lg:flex hidden">
                        <div className="ml-[15px] flex items-center cursor-pointer" >
                            <HiOutlineInboxIn className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-[15px]">Offers</h3>
                                <small className="text-[#acabab] text-[12px]">Latest Offers</small>
                            </div>
                        </div>
                        <div className="ml-[15px] flex items-center cursor-pointer" >
                            <MdOutlineElectricBolt className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-[15px]">Gadget Fest</h3>
                                <small className="text-[#acabab] text-[12px]">Special Deals</small>
                            </div>
                        </div>

                        <div className="ml-[15px] flex items-center cursor-pointer" >
                            <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />
                            <div >
                                <h3 className="text-[#fff] text-[15px]">Account</h3>
                                <small className="text-[#acabab] text-[12px]">
                                    <Link href={"/auth/register"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Register </Link>
                                    or
                                    <Link href={"/auth/login"} className="py-1 cursor-pointer hover:text-[#ef4a23]"> Login</Link>
                                </small>
                            </div>
                        </div>

                        <div className="ml-[10px] mr-3">
                            <Link href={"builder"} className="btn">PC Builder</Link>
                        </div>
                    </div>

                    <div className="flex mr-2 lg:hidden">
                        <span className="px-3 py-2 cursor-pointer text-[#fff] text-[25px] flex justify-center items-center"><SearchOutlined /></span>
                        <span className="px-3 py-2 cursor-pointer text-[#fff] text-[25px] flex justify-center items-center"><ShoppingCartOutlined /></span>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-center items-center hidden">
                <ul className="flex">
                    {NavMenuList}
                </ul>
            </div>
            {/* {
                open && <div style={{ border: "1px solid red" }} className="fixed h-[110vh] z-50 top-[-1px] flex justify-center items-center">
                    <SideBar open={open} setOpen={setOpen} />
                </div>
            } */}
            <Sidebar open={open} setOpen={setOpen} />
        </div>
    );
};
export default NavBar;