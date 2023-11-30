/* eslint-disable react/no-unescaped-entities */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Image from "next/image";
import { MdStars } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";
import QuantityCalculation from "@/components/ProductIDPage/QuantityCalculation";
import PaymentOptions from "@/components/ProductIDPage/PaymentOptions";
import KeyFeatures from "@/components/ProductIDPage/KeyFeatures";

const ProductDetails = () => {
    return (
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
                   
                   
                    <KeyFeatures/>
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