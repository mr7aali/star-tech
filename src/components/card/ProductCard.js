/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { LuCopyPlus } from "react-icons/lu";



const ProductCard = ({ data }) => {
    return (
        <div className="relative w-[230px] bg-white rounded-md">
            <div style={{ borderRadius: "0px 15px 15px 0px" }} className="absolute top-2 bg-[#6e2594]">
                <span className="text-[12px] text-[#fff] p-2">Earn Point: 100</span>
            </div>
            <aside style={{ borderBottom: "3px solid rgba(55,73,187,.03)" }}>
                <Link href={"/product/id"} className="mt-3 border-3 border-solid border-red-400" >
                    <Image className="mx-auto cursor-pointer" src="https://www.startech.com.bd/image/cache/catalog/monitor/acer/ek220q-h3bi/ek220q-h3bi-05-200x200.webp" width={210} height={210} alt="" />
                </Link>
            </aside>
            <div className="px-5 py-2">
                <Link href={"/product/id"} className="font-serif duration-100 text-[#111] hover:text-[#ef4a23]  text-[17px] hover:underline cursor-pointer">ACER EK220Q H3bi 21.5 inch 1ms 100hz Borderless Full HD Monitor</Link>
            </div>

            <ul style={{ borderBottom: "1px solid #eee" }} className="mx-5 list-item py-5">
                <li className="text-[13px] font-serif list-disc opacity-75 font-medium ml-2">Up to 8x Zoom, 93° Angle of View</li>
                <li className="text-[13px] font-serif list-disc opacity-75 font-medium ml-2">Camera with 1/1.7" 64MP CMOS Sensor</li>
                <li className="text-[13px] font-serif list-disc opacity-75 font-medium ml-2">Optional Wi-Fi & Bluetooth Monitoring</li>
                <li className="text-[13px] font-serif list-disc opacity-75 font-medium ml-2">Time-Lapse, Motion-Lapse, Panorama Modes</li>
            </ul>
            <p className="text-[17px] font-semibold text-[#ef4a23] py-3 text-center font-mono"> 153,000৳</p>

            <div className="pb-2">
                <div className="flex mx-3 duration-150 py-1 rounded hover:bg-[#3749bb] hover:text-white justify-center items-center font-serif text-[#3749bb] cursor-pointer bg-[rgba(55,73,187,.05)]">
                    <IoCart />
                    <span className="ml-2 text-[15px]">Buy Now</span>
                </div>
                <div className="flex mx-3 duration-150 my-2 py-1 rounded hover:bg-[#f1f3f5]  justify-center items-center font-serif text-black opacity-75 cursor-pointer">
                    <LuCopyPlus />
                    <small className="ml-2">Add to Compare</small>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;