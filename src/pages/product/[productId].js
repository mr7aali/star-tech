/* eslint-disable react/no-unescaped-entities */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Image from "next/image";
import { MdStars } from "react-icons/md";
import QuantityCalculation from "@/components/ProductIDPage/QuantityCalculation";
import PaymentOptions from "@/components/ProductIDPage/PaymentOptions";
import KeyFeatures from "@/components/ProductIDPage/KeyFeatures";
import SingleFeatures from "@/components/ProductIDPage/SingleFeatures";
import RelatedProductCard from "@/components/ProductIDPage/RelatedProductCard";

const ProductDetailsPage = () => {
    return (
        <>

            <div className="bg-white ">
                <div className="max-w-[1290px] mx-auto flex flex-col justify-center items-center md:items-start md:flex-row sm:pt-10">
                    <div className="px-[15px]">
                        <Image
                            src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g2412/g2412-06-500x500.webp"
                            alt=""
                            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="px-[15px] md:ml-10">
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

            <div className=" max-w-[1290px] mx-auto mt-5 grid grid-cols-12 gap-5 px-3">
                {/* left */}
                <div className="col-span-12 lg:col-span-9 " >
                    <div className="sm:flex sm:justify-center sm:items-center">


                        {
                            ["Specification", "Description", "Questions", "Reviews"]
                                .map((Item, index) => (
                                    <div key={index}
                                        style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}
                                        className={`${index === 0 ? "bg-[#ef4a23] text-white" : "bg-white text-black"} py-1 my-1 sm:my-0 sm:py-2 px-3 sm:px-5 mr-2 sm:mr-5 rounded  hover:text-white inline-block  hover:bg-[#ef4a23]  cursor-pointer`}>
                                        <p className=" font-semibold text-[10px] sm:text-[14px]">{Item}</p>
                                    </div>
                                ))
                        }

                    </div>

                    <div className="bg-white rounded-md  mt-5 px-3 sm:px-5">
                        <h2 className="font-semibold text-[20px] py-5">Specification</h2>
                        <SingleFeatures />
                        <SingleFeatures />
                    </div>

                </div>

                {/* Right */}
                <div className="hidden lg:block h-auto col-span-3 rounded-md ">
                    <div className="bg-white px-5" style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}>
                        <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[15px] xl:text-[17px]">Related Product</h2>
                        <RelatedProductCard />
                    </div>

                    <div className="bg-white mt-5 px-5" style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}>
                        <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[15px] xl:text-[17px]">Recently Viewed</h2>
                        {/* <RelatedProductCard /> */}
                    </div>


                </div>


            </div>
        </>
    );
};
export default ProductDetailsPage;




ProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}