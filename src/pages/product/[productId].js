/* eslint-disable react/no-unescaped-entities */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Image from "next/image";
import { MdStars } from "react-icons/md";
import QuantityCalculation from "@/components/ProductIDPage/QuantityCalculation";
import PaymentOptions from "@/components/ProductIDPage/PaymentOptions";
import KeyFeatures from "@/components/ProductIDPage/KeyFeatures";
import SingleFeatures from "@/components/ProductIDPage/SingleFeatures";
import Link from "next/link";
import RelatedProductCard from "@/components/ProductIDPage/RelatedProductCard";

const ProductDetails = () => {
    return (
        <>

            <div className="bg-white ">
                <div className="max-w-[1290px] mx-auto flex pt-10">
                    <div className="px-[15px]">
                        <Image
                            src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g2412/g2412-06-500x500.webp"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="px-[15px] ml-10">
                        <KeyFeatures />
                        <div className="inline-block">
                            <div className="mt-10 bg-red-100 flex  rounded-full justify-between items-center px-3 py-2">
                                <span className="mx-1 text-[30px]"><MdStars /></span>
                                <span className="mx-1 text-[25px] font-semibold">450</span>
                                <span className="mx-1 ">Star Points</span>
                            </div>
                        </div>
                        <PaymentOptions />
                        <QuantityCalculation />
                    </div>
                </div>
            </div>
            
            <div className="w-[1290px] mx-auto mt-5 grid grid-cols-12 gap-5">
                {/* left */}
                <div className="col-span-9 " >
                    <div className="">

                        <div className="py-2 px-5 mr-5 rounded bg-[#ef4a23] inline-block cursor-pointer">
                            <small className=" text-white font-semibold text-[14px]">Specification</small>
                        </div>

                        {
                            ["Description", "Questions", "Reviews"]
                                .map((Item, index) => (
                                    <div key={index}
                                        style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}
                                        className="py-2 px-5 mr-5 rounded text-black hover:text-white bg-white  hover:bg-[#ef4a23] inline-block cursor-pointer">
                                        <small className=" font-semibold text-[14px]">{Item}</small>
                                    </div>
                                ))
                        }

                    </div>

                    <div className="bg-white rounded-md  mt-5 px-5">
                        <h2 className="font-semibold text-[20px] py-5">Specification</h2>
                        <SingleFeatures />
                        <SingleFeatures />
                    </div>

                </div>

                {/* Right */}
                <div className=" h-auto col-span-3 rounded-md ">
                    <div className="bg-white px-5" style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}>
                        <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[17px]">Related Product</h2>
                        <RelatedProductCard />
                    </div>

                    <div className="bg-white mt-5 px-5" style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}>
                        <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[17px]">Recently Viewed</h2>
                        {/* <RelatedProductCard /> */}
                    </div>


                </div>


            </div>
        </>
    );
};
export default ProductDetails;




ProductDetails.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}