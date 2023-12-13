import { SearchOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
// import SwiperBanner from "../ui/SwiperBanner";
import Image from "next/image";
// import Marquee from "../ui/Marquee"

const SwiperBanner = dynamic(() => import('../ui/SwiperBanner'), { ssr: true });
const Marquee = dynamic(() => import('../ui/Marquee'), { ssr: false });


const Banner = () => {
    return (
        <section>
            <div className="max-w-[1290px] lg:mx-auto gap-5  grid grid-cols-1 lg:grid-cols-12 my-8 mx-2">
                <div className="lg:col-span-9">

                    <SwiperBanner  />

                </div>

                <div className="gap-5 col-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 lg:col-start-10 lg:col-end-13">



                    <div  className="bg-[#ffe8a1] px-2 xl:px-5">
                        <h3 className="lg:text-[14px] text-[22px] text-center font-semibold mt-5 lg:mt-3 xl:mt-5">Compare Products</h3>
                        <small className="opacity-50 my-2 block text-center">Choose Two Products to Compare</small>

                        <div  className="my-3">
                            <div className="relative">
                                <input className="w-full mt-2 lg:mt-1 outline-none py-2 pl-2 placeholder:text-[13px] xl:placeholder:text-[14px] before rounded-sm" placeholder="Search & Select Product" type="text" name="" id="" />
                                <span className="absolute top-3 right-3 opacity-50"><SearchOutlined /></span>
                            </div>

                            <div className="relative">
                                <input className="w-full my-3 lg:my-2 outline-none py-2 pl-2 placeholder:text-[13px] xl:placeholder:text-[14px] before rounded-sm" placeholder="Search & Select Product" type="text" name="" id="" />
                                <span className="absolute top-3 right-3 opacity-50"><SearchOutlined /></span>
                            </div>

                            <div className="xl:py-2">
                                <button className="btn  st-outline w-full ">View Comparison</button>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[black]">

                        <Image width={300} height={190} className="w-[100%] h-[100%]" src="https://www.startech.com.bd/image/catalog/home/banner/small/budget-desktop-pc-27k-2.webp" alt="" />
                    </div>
                </div>
                

            </div>

         
            <Marquee/>
        </section>
    );
};

export default Banner;