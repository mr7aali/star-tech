"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  BsCartPlusFill,
  BsCurrencyDollar,
  BsCpu,
  BsMotherboard,
} from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import { MdScreenShare, MdOutlineSdStorage } from "react-icons/md";
import DefaultCard from "@/components/card/DefaultCard";
import { CgSmartphoneRam } from "react-icons/cg";
import { PiMonitorDuotone } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import HeadTag from "@/components/sheared/HeaderTag";

const PcBuilderPage = () => {
  return (
    <>
      <HeadTag descriptionContent={"Pc Builder page"} title={"PC Builder"} />
      <div
        style={{ border: "1px solid #C3C8EB" }}
        className="max-w-4xl bg-[#F9F9FC] mx-auto shadow-lg mt-16 mb-32"
      >
        <div className="flex justify-between header">
          {/** header */}
          <div className="py-5 mx-5">
            <Image
              src="https://www.startech.com.bd/image/catalog/logo.png"
              width={90}
              height={50}
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div
              style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center px-5 cursor-pointer"
            >
              <BsCartPlusFill className="text-2xl text-[#EF4A23]" />
              <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">
                Add to Cart
              </p>
            </div>
            <div
              style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center px-5 cursor-pointer"
            >
              <AiFillSave className="text-2xl text-[#EF4A23]" />
              <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">
                Add to Cart
              </p>
            </div>
            <div
              style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center px-5 cursor-pointer"
            >
              <AiFillPrinter className="text-2xl text-[#EF4A23]" />
              <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">
                Add to Cart
              </p>
            </div>
            <div className="flex flex-col items-center px-5 cursor-pointer">
              <MdScreenShare className="text-2xl text-[#EF4A23]" />
              <p className="text-[12px] text-[#666666] hover:text-[#000] my-1">
                Add to Cart
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid #C3C8EB" }}
          className="pb-8 bg-[#fff]"
        >
          <div className="mx-16">
            <div className="flex items-center justify-between">
              {/* subHeader */}
              <div>
                <h1 className="font-bold text-[#3749BB] mt-5">
                  PC Builder - Build Your Own Computer - Star Tech
                </h1>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="input-hide"
                    placeholder="dkfj"
                    id=""
                  />
                  <label
                    htmlFor="input-hide"
                    className="ml-2 text-[#808996] text-sm"
                  >
                    Hide Unconfigured Components
                  </label>
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
            <h1 className="text-sm font-bold bg-[#808996] text-[#fff] pl-2">
              Core Components
            </h1>

            <DefaultCard comName={"CPU"} icon={BsCpu} />
            <DefaultCard comName={"MotherBoard"} icon={BsMotherboard} />
            <DefaultCard comName={"RAM"} icon={CgSmartphoneRam} />
            <DefaultCard comName={"Storage"} icon={MdOutlineSdStorage} />
            <DefaultCard comName={"Power Supply"} icon={ImPower} />
            <DefaultCard comName={"Monitor"} icon={PiMonitorDuotone} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PcBuilderPage;
