import RootLayouts from "@/components/Layouts/RootLayouts";
import Image from "next/image";
import { BsCartPlusFill, BsCurrencyDollar } from "react-icons/bs";
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

            <div style={{ borderTop: "1px solid #C3C8EB" }} className="bg-[#fff]">

                <div className="mx-16">

                    <div className="flex justify-between items-center">{/* subHeader */}
                        <div>
                            <h1 className="font-bold text-[#3749BB] mt-5">PC Builder - Build Your Own Computer - Star Tech</h1>
                            <div className="flex items-center">
                                <input type="checkbox" name="input-hide" placeholder="dkfj" id="" />
                                <label for="input-hide" className="ml-2 text-[#808996] text-sm">Hide Unconfigured Components</label>
                            </div>
                        </div>
                        <div className=" bg-[#3749BB] rounded-md px-[20px] py-[5px] my-5">


                            <div className="flex items-center text-[#fff] justify-center">
                                <p>100</p>
                                <BsCurrencyDollar />
                            </div>
                            <p className="text-sm text-[#fff]">0 iteams</p>
                        </div>
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