import Link from "next/link";
import { HiOutlineInboxIn } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineElectricBolt, MdOutlineManageAccounts } from "react-icons/md";
import Image from "next/image";
const NavBar = () => {
    const NavMenuList = ["Desktop", "Laptop", "Component", "Monitor", "UPS",
        "Phone", "Tablet", "Office Equipment", "Camera", "Security", "Networking",
        "Software", "Server & Storage", "Accessories", "Gadget", "Gaming", "TV", "AC"
    ].map(li => (
        <li key={li} className="mx-2 py-4 text-[12px] font-serif font-bold cursor-pointer hover:text-[#ef4a23]">
            {li}
        </li>
    ))

    return (
        <div className="" style={{ boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.31)', }}>
            <div className="top bg-[#081621] flex justify-center items-center">
                <div className="mx-auto w-[1290px] flex items-center">
                    <Link href={"/"} className="mx-4 py-3">
                        {/* <img className="w-[117px] " src="https://www.startech.com.bd/image/catalog/logo.png" alt="" srcSet="" /> */}
                        <Image
                            src="https://www.startech.com.bd/image/catalog/logo.png"
                            width={117}
                            height={9}
                            alt=""
                        />
                    </Link>

                    <div className=" h-[42px] flex-1 rounded-sm ml-5 relative">
                        <input className=" w-full rounded-sm h-full p-[15px] outline-none" placeholder="Search" type="text" />

                        <AiOutlineSearch className="absolute right-0 top-2 cursor-pointer  text-[black] mr-4 text-2xl" />

                    </div>

                    <div  className="flex">
                        <div  className="ml-[15px] flex items-center cursor-pointer" >
                            <HiOutlineInboxIn className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-[15px]">Offers</h3>
                                <small className="text-[#acabab] text-[12px]">Latest Offers</small>
                            </div>
                        </div>
                        <div  className="ml-[15px] flex items-center cursor-pointer" >
                            <MdOutlineElectricBolt className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-[15px]">Gadget Fest</h3>
                                <small className="text-[#acabab] text-[12px]">Special Deals</small>
                            </div>
                        </div>

                        <div  className="ml-[15px] flex items-center cursor-pointer" >
                            <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-[15px]">Account</h3>
                                <small className="text-[#acabab] text-[12px]">
                                    <Link href={"/login"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Register </Link>
                                    or
                                    <Link href={"/login"} className="py-1 cursor-pointer hover:text-[#ef4a23]"> Login</Link>
                                </small>
                            </div>
                        </div>
            
                        <div className="ml-[10px]">
                            <Link href={"pc_builder"} className="btn">PC Builder</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex">
                    {NavMenuList}
                </ul>
            </div>
        </div>
    );
};
export default NavBar;