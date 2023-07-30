import RootLayouts from "@/components/Layouts/RootLayouts";
import Image from "next/image";
import { BsCartPlusFill, BsCurrencyDollar, BsCpu ,BsMotherboard} from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import { MdScreenShare } from "react-icons/md";
import DefaultCard from "@/components/card/DefaultCard";
import {CgSmartphoneRam} from "react-icons/cg"


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

            <div style={{ borderTop: "1px solid #C3C8EB" }} className="pb-8 bg-[#fff]">

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
                    <h1 className="text-sm font-bold bg-[#808996] text-[#fff] pl-2">Core Components</h1>


                    {/* <div className="h-[60px] flex justify-between mt-10">
                        <div className="flex ">
                            <div style={{ background: "rgba(55, 73, 187, 0.1)" }} className="rounded-md w-[60px] h-[60px] flex justify-center items-center">
                                <BsCpu className="text-4xl text-[#3749bb]" />
                            </div>
                            <div className="title ml-5">
                                <div className="text-xm font-bold mb-3">CPU</div>
                                <div className="pr-2 h-[12px] w-[300px] bg-[#F2F3F4]">
                                </div>
                            </div>
                        </div>
                        <div className="right-side flex items-center ">
                            <div className="pr-2 h-[12px] w-[79px] bg-[#F2F3F4] ">

                            </div>
                            <div style={{ border: "1px solid #F2F3F4" }} className="w-[1px] h-[50px] mx-10"></div>
                            <div >
                                <button style={{ border: '2px solid #3749bb' }} className="px-5 py-[10px] rounded-md text-[#3749bb] font-bold text-sm">Choose</button>
                            </div>
                        </div>
                    </div> */}
                    <DefaultCard comName={"CPU"} icon={BsCpu} />
                    <DefaultCard comName={"MotherBoard"} icon={BsMotherboard} />
                    <DefaultCard comName={"RAM"} icon={CgSmartphoneRam} />
                    <DefaultCard comName={"Storage"} icon={AiFillPrinter} />
                    <DefaultCard comName={"Power Supply"} icon={AiFillPrinter} />
                    <DefaultCard comName={"Monitor"} icon={AiFillPrinter} />

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