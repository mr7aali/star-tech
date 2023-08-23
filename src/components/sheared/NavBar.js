import Link from "next/link";
import { HiOutlineInboxIn } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineElectricBolt, MdOutlineManageAccounts } from "react-icons/md";
import Image from "next/image";
const NavBar = () => {

    return (

        <>
            <div className="top bg-[#081621] flex justify-center items-center">
                <div className="container mx-auto flex items-center">

                    <Link href={"/"} className="mx-4 py-5">
                        {/* <img className="w-[117px] " src="https://www.startech.com.bd/image/catalog/logo.png" alt="" srcSet="" /> */}
                        <Image
                            src="https://www.startech.com.bd/image/catalog/logo.png"
                            width={117}
                            height={92}
                            alt=""
                        />
                    </Link>

                    <div className=" h-[42px] flex-1 rounded-sm ml-5 relative">
                        <input className=" w-full rounded-sm h-full p-[15px] outline-none" placeholder="Search" type="text" />

                        <AiOutlineSearch className="absolute right-0 top-2 cursor-pointer  text-[black] mr-4 text-2xl" />

                    </div>

                    <div className="flex   mx-[50px]">
                        <div className="mx-5 flex items-center" >
                            <HiOutlineInboxIn className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-xm">Offers</h3>
                                <p className="text-[#acabab] text-sm">Latest Offers</p>
                            </div>
                        </div>
                        <div className="mx-5 flex items-center" >
                            <MdOutlineElectricBolt className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-xm">Desktop Deal</h3>
                                <p className="text-[#acabab] text-sm">Special Deals</p>
                            </div>
                        </div>
                        <div className="mx-5 flex items-center" >
                            <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-xm">Account</h3>
                                <p className="text-[#acabab] text-sm">
                                    <Link href={"/login"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Register </Link>
                                     or
                                    <Link href={"/login"} className="py-1 cursor-pointer hover:text-[#ef4a23]"> Login</Link>
                                </p>
                            </div>
                        </div>
                        <Link href={"pc_builder"} className="mx-5 flex items-center justify-center rounded-md" style={{ border: '1px solid #ef4a23' }}>
                            <button href='pc' style={{ border: '1px solid red' }} className="text-[#fff] h-full w-[100%] px-5">PC Builder</button>
                        </Link>
                    </div>


                </div>
            </div>
            <div className="flex justify-center container mx-auto">
                <div className="py-2 px-3 cursor-pointer drop-down-container">
                    <h1 className="hover:text-[#ef4a23] drop-down-parent text-[14px] font-bold">CPU</h1>
                    <ul className="drop-down-child">
                        <li> <p className="px-2">List 1</p> </li>
                        <li> <p className="px-2">List 1</p> </li>
                        <li> <p className="px-2">List 1</p> </li>
                        <li> <p className="px-2">List 1</p> </li>
                    </ul>
                </div>
                <div className="font-bold py-2 px-3 cursor-pointer">
                    <h1 className="hover:text-[#ef4a23] text-[14px] font-bold">Motherboard</h1>
                </div>
                <div className="font-bold py-2 px-3 cursor-pointer">
                    <h1 className="hover:text-[#ef4a23] text-[14px] font-bold">RAM</h1>
                </div>
                <div className="font-bold py-2 px-3 cursor-pointer">
                    <h1 className="hover:text-[#ef4a23] text-[14px] font-bold">Power Supply</h1>
                </div>
                <div className="font-bold py-2 px-3 cursor-pointer">
                    <h1 className="hover:text-[#ef4a23] text-[14px] font-bold">Storage</h1>
                </div>
                <div className="font-bold py-2 px-3 cursor-pointer">
                    <h1 className="hover:text-[#ef4a23] text-[14px] font-bold">Storage</h1>
                </div>
                <div className="font-bold py-2 px-3 cursor-pointer">
                    <h1 className="hover:text-[#ef4a23] text-[14px] font-bold">Monitor</h1>
                </div>
                <div className="font-bold py-2 px-3 cursor-pointer">
                    <h1 className="hover:text-[#ef4a23] text-[14px] font-bold">Others</h1>
                </div>

            </div>
        </>
    );
};

export default NavBar;