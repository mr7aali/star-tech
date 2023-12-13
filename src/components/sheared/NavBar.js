import Link from "next/link";
import Image from "next/image";
import { HiOutlineInboxIn } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineElectricBolt, MdOutlineManageAccounts, MdLocalOffer } from "react-icons/md";
import { BarsOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { PiPlusMinusFill } from "react-icons/pi";
import { RiBuilding3Line } from "react-icons/ri";
import { useState } from "react";
import dynamic from "next/dynamic";
import { isLoggedIn, removeUserInfo } from "@/service/auth.service";

const Sidebar = dynamic(() => import('../ui/SideBar'), { ssr: true });

const NavBar = ({ setCartOpen }) => {


    const [open, setOpen] = useState(false);
    const NavMenuList = ["Desktop", "Laptop", "Component", "Monitor", "UPS",
        "Phone", "Tablet", "Office Equipment", "Camera", "Security", "Networking",
        "Software", "Server & Storage", "Accessories", "Gadget", "Gaming", "TV", "AC"
    ].map(li => (
        <li key={li} className="xl:mx-2 mx-1 py-4 text-[10px] xl:text-[12px] xl:font-serif font-bold  cursor-pointer hover:text-[#ef4a23]">
            {li}
        </li>
    ))

    console.log(isLoggedIn())


    return (
        <>
            <section className="lg:relative fixed top-0 w-full z-10" style={{ boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.31)', }}>
                <main className="top bg-[#081621] flex justify-center items-center">
                    <div className="mx-auto w-[1290px] flex items-center justify-between">
                        <div onClick={() => setOpen(!open)} className="pl-5 cursor-pointer lg:hidden">
                            <span className="p-2 text-[#fff] text-[25px] flex justify-center items-center"><BarsOutlined /></span>
                        </div>

                        <Link href={"/"} className="lg:mx-4 lg:py-3 py-2">

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
                            {
                                isLoggedIn() ? <AccountLogOut /> : <AccoutLogIn />

                            }


                            <div className="ml-[10px] mr-3">
                                <Link href={"builder"} className="btn">PC Builder</Link>
                            </div>
                        </div>

                        <div className="flex mr-2 lg:hidden">
                            <span className="px-3 py-2 cursor-pointer text-[#fff] text-[25px] flex justify-center items-center"><SearchOutlined /></span>
                            <span onClick={() => setCartOpen(true)} className="px-3 py-2 cursor-pointer text-[#fff] text-[25px] flex justify-center items-center"><ShoppingCartOutlined /></span>
                        </div>
                    </div>
                </main>
                <Sidebar open={open} setOpen={setOpen} />

            </section>

            <nav

                style={{ boxShadow: "0 2px 2px rgba(0,0,0,.1)" }}
                className="lg:flex  sticky top-0 z-10 h-full bg-white justify-center items-center hidden">
                <ul className="flex ">
                    {NavMenuList}
                </ul>
            </nav>







            <footer
                style={{ boxShadow: "0 -4px 4px rgba(0,0,0,.2), 0 -1px 0 rgba(255,255,255,.2)", }}
                className="lg:hidden z-[1] bg-[#081621] w-full fixed bottom-0 grid grid-cols-5 gap- sm:gap-5 sm:px-10 py-3">
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <MdLocalOffer className="text-white sm:text-xl" />
                    <small className="text-white text-[9px] sm:text-[10px] pt-1 sm:pt-2 opacity-70">Offers</small>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <MdOutlineElectricBolt className="text-white sm:text-xl" />
                    <small className="text-white text-[9px] sm:text-[10px] pt-1 sm:pt-2 opacity-70">Winter Fest</small>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <RiBuilding3Line className="text-white sm:text-xl" />
                    <small className="text-white text-[9px] sm:text-[10px] pt-1 sm:pt-2 opacity-70">PC Builder</small>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <PiPlusMinusFill className="text-white sm:text-xl" />
                    <small className="text-white text-[9px] sm:text-[10px] pt-1 sm:pt-2 opacity-70">Compare (0)</small>
                </div>
                <Link href={"/auth/login"} className="flex flex-col items-center justify-center cursor-pointer">
                    <MdOutlineManageAccounts className="text-white sm:text-xl" />
                    <small className="text-white text-[9px] sm:text-[10px] pt-1 sm:pt-2 opacity-70">Account</small>
                </Link>
            </footer>


        </>
    );
};
export default NavBar;





const AccountLogOut = () => {


    return (<div className="ml-[15px] flex items-center cursor-pointer" >
        <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />
        <aside>
            <h3 className="text-[#fff] text-[15px]">Account</h3>
            <div className="text-[#acabab] text-[12px]">
                <Link
                    href={"/account"}
                >
                    <span key={"1"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Profile</span>



                </Link>
                <span> or </span>
                <Link
                    onClick={() => removeUserInfo()}
                    href={"/auth/login"}
                    className="py-1 cursor-pointer hover:text-[#ef4a23]">
                    Logout
                </Link>
            </div>
        </aside>
    </div>
    )

}

const AccoutLogIn = () => {
    return (
        <div className="ml-[15px] flex items-center cursor-pointer" >
            <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />

            <aside>
                <h3 className="text-[#fff] text-[15px]">Account</h3>
                <div className="text-[#acabab] text-[12px]">
                    <Link
                        href={"/auth/register"}
                    ><span key={"1d"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Register</span></Link>
                    <span> or </span>
                    <Link
                        href={"/auth/login"}
                        className="py-1 cursor-pointer hover:text-[#ef4a23]">
                        Login
                    </Link>
                </div>
            </aside>
        </div>
    )

}