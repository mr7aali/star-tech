"use client";
import Image from "next/image";
import {
  BsCartPlusFill,
  BsCurrencyDollar,
  BsCpu,
  BsMotherboard,
} from "react-icons/bs"; // Corrected to bs from bi
import { AiOutlineSave, AiOutlinePrinter } from "react-icons/ai";
import { MdShare, MdOutlineSdStorage } from "react-icons/md";
import DefaultCard from "@/components/card/DefaultCard";
import { CgSmartphoneRam } from "react-icons/cg";
import { PiMonitorDuotone } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import HeadTag from "@/components/sheared/HeaderTag";

const PcBuilderPage = () => {
  // Placeholder for dynamic data (replace with actual state or props)
  const buildData = {
    totalCost: 0,
    itemCount: 0,
    totalComponents: 6, // CPU, Motherboard, RAM, Storage, Power Supply, Monitor
  };

  const completionPercentage =
    (buildData.itemCount / buildData.totalComponents) * 100;

  return (
    <section
      className="px-2 py-8 sm:px-4 sm:py-12"
      style={{ backgroundColor: "#f2f4f8" }}
    >
      <HeadTag
        descriptionContent="Star Tech PC Builder page"
        title="PC Builder"
      />
      <div
        className="w-full max-w-3xl mx-auto bg-white border rounded-lg shadow-lg"
        style={{ borderColor: "#e5e7eb" }}
      >
        {/* Header */}
        <div className="p-4 sm:p-6" style={{ backgroundColor: "#3749bb" }}>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <Image
                src="https://www.startech.com.bd/image/catalog/logo.png"
                width={80}
                height={40}
                alt="Star Tech logo"
                className="object-contain"
              />
              <h1
                className="text-base font-bold sm:text-lg"
                style={{ color: "#fff" }}
              >
                Build Your Dream PC
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <button
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium transition-all duration-200 rounded-md sm:text-sm hover:scale-105"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                }}
                aria-label="Add PC build to cart"
                role="button"
              >
                <BsCartPlusFill
                  className="text-base"
                  style={{ color: "#ef4a23" }}
                />
                Add to Cart
              </button>
              <button
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium transition-all duration-200 rounded-md sm:text-sm hover:scale-105"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                }}
                aria-label="Save PC build"
                role="button"
              >
                <AiOutlineSave
                  className="text-base"
                  style={{ color: "#ef4a23" }}
                />
                Save
              </button>
              <button
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium transition-all duration-200 rounded-md sm:text-sm hover:scale-105"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                }}
                aria-label="Print PC build"
                role="button"
              >
                <AiOutlinePrinter
                  className="text-base"
                  style={{ color: "#ef4a23" }}
                />
                Print
              </button>
              <button
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium transition-all duration-200 rounded-md sm:text-sm hover:scale-105"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                }}
                aria-label="Share PC build"
                role="button"
              >
                <MdShare className="text-base" style={{ color: "#ef4a23" }} />
                Share
              </button>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-500"
                style={{
                  width: `${completionPercentage}%`,
                  backgroundColor: "#ef4a23",
                }}
              />
            </div>
            <p className="mt-1 text-xs text-center" style={{ color: "#fff" }}>
              Build Progress: {Math.round(completionPercentage)}%
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="flex flex-col items-center justify-between gap-4 mb-4 sm:flex-row">
            <div>
              <h2
                className="text-base font-bold sm:text-lg"
                style={{ color: "#3749bb" }}
              >
                Customize Your PC
              </h2>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="hide-unconfigured"
                  name="hide-unconfigured"
                  className="rounded focus:ring-2"
                  style={{ accentColor: "#ef4a23" }}
                />
                <label
                  htmlFor="hide-unconfigured"
                  className="ml-2 text-xs sm:text-sm"
                  style={{ color: "#666" }}
                >
                  Hide Unconfigured Components
                </label>
              </div>
            </div>
            <div
              className="flex items-center gap-1 px-3 py-1.5 rounded-md"
              style={{ backgroundColor: "#3749bb", color: "#fff" }}
            >
              <span className="text-xs font-bold sm:text-sm">
                ৳ {buildData.totalCost.toLocaleString("en-US")}
              </span>
              <BsCurrencyDollar className="text-base" />
              <span className="text-xs">
                {buildData.itemCount}{" "}
                {buildData.itemCount === 1 ? "item" : "items"}
              </span>
            </div>
          </div>

          <h3
            className="px-2 py-1 mb-4 text-xs font-bold rounded-sm sm:text-sm"
            style={{ backgroundColor: "#666", color: "#fff" }}
          >
            Core Components
          </h3>

          <div className="flex flex-col gap-3">
            <DefaultCard comName="CPU" icon={BsCpu} />
            <DefaultCard comName="Motherboard" icon={BsMotherboard} />
            <DefaultCard comName="RAM" icon={CgSmartphoneRam} />
            <DefaultCard comName="Storage" icon={MdOutlineSdStorage} />
            <DefaultCard comName="Power Supply" icon={ImPower} />
            <DefaultCard comName="Monitor" icon={PiMonitorDuotone} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PcBuilderPage;
