import { SearchOutlined } from "@ant-design/icons";
import SwiperBanner from "../ui/SwiperBanner";
import Image from "next/image";


const Banner = () => {
    return (
        <>
            <div className="max-w-[1290px] mx-auto gap-5 bg-[red] grid grid-cols-12 my-8">
                <div className="col-span-9">

                    <SwiperBanner />

                </div>
                <div className=" gap-5 col-auto grid grid-rows-2 col-start-10 col-end-13">



                    <div className="bg-[#ffe8a1]  px-5">
                        <h3 className="text-[14px] text-center font-semibold mt-5 ">Compare Products</h3>
                        <small className="opacity-50 my-2 block text-center">Choose Two Products to Compare</small>

                        <div className="my-3">
                            <div className="relative">
                                <input className="w-full my-2 outline-none py-2 pl-2 placeholder:text-[14px] before rounded-sm" placeholder="Search & Select Product" type="text" name="" id="" />
                                <span className="absolute top-3 right-3 opacity-50"><SearchOutlined /></span>
                            </div>

                            <div className="relative">
                                <input className="w-full my-2 outline-none py-2 pl-2 placeholder:text-[14px] before rounded-sm" placeholder="Search & Select Product" type="text" name="" id="" />
                                <span className="absolute top-3 right-3 opacity-50"><SearchOutlined /></span>
                            </div>

                            <div className="py-2">
                                <button className="btn st-outline w-full ">View Comparison</button>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[black]">

                        <Image width={300} height={193} className="w-[100%] h-[100%]" src="https://www.startech.com.bd/image/catalog/home/banner/small/budget-desktop-pc-27k-2.webp" alt="" />
                    </div>
                </div>
                

            </div>
            <div  style={{borderRadius:'33px'}} className="max-w-[1290px] mx-auto flex items-center py-2 px-5 bg-[#fff]">
                <marquee behavior="scroll" direction="left"  className="text-[20] font-mono">26th October Thursday, our all outlets are open. Additionally, our online activities are open and operational.</marquee>
            </div>
        </>
    );
};

export default Banner;