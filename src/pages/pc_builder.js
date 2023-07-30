import RootLayouts from "@/components/Layouts/RootLayouts";
import Image from "next/image";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import { MdScreenShare } from "react-icons/md";
const PcBuilderPage = () => {
    return (
        <div style={{ border: "1px solid #C3C8EB" }} className="max-w-4xl bg-[#F9F9FC] mx-auto mt-11">

            <div className="header flex justify-between">{/** header */}
                <div className="mx-5 py-5">
                    <Image
                        src="https://www.startech.com.bd/image/catalog/logo.png"
                        width={90}
                        height={50}
                        alt=""
                    />
                </div>
                <div className="flex items-center">
                    <div style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)' }} className="flex flex-col items-center px-5 cursor-pointer">
                        <BsCartPlusFill className="text-2xl text-[#EF4A23]" />
                        <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">Add to Cart</p>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)' }} className="flex flex-col items-center px-5 cursor-pointer">
                        <AiFillSave className="text-2xl text-[#EF4A23]" />
                        <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">Add to Cart</p>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)' }} className="flex flex-col items-center px-5 cursor-pointer">
                        <AiFillPrinter className="text-2xl text-[#EF4A23]" />
                        <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">Add to Cart</p>
                    </div>
                    <div
                        className="flex flex-col items-center px-5 cursor-pointer">
                        <MdScreenShare className="text-2xl text-[#EF4A23]" />
                        <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">Add to Cart</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PcBuilderPage;


PcBuilderPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    )
}