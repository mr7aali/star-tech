import Image from "next/image";
import PaymentOptions from "./PaymentOptions";
import QuantityCalculation from "./QuantityCalculation";
import { MdStars } from "react-icons/md";
import { LsKey } from "@/shared/type";

const ProductDetails = ({ data }) => {
  const productData = data?.data;

  return (
    <div className="bg-white">
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
          {/* //! <KeyFeatures data={data} /> */}
          <div>
            <h2 className="text-[18px] sm:text-[22px] font-serif text-[#3749bb]">
              {/* MSI G2412 23.8" FHD 170Hz IPS 1ms FreeSync Premium Gaming Monitor */}
              {productData?.title}
            </h2>

            <aside className="flex flex-wrap my-2">
              <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                <p className="px-3 py-1 text-xs sm:px-5 sm:text-sm">
                  Price:{" "}
                  <span className="font-semibold"> {productData?.price} ৳</span>
                </p>
              </div>
              <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                <p className="px-3 py-1 text-xs sm:px-5 sm:text-sm">
                  Regular Price:{" "}
                  <span className="font-semibold">{productData?.price} ৳</span>
                </p>
              </div>
              <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                <p className="px-3 py-1 text-xs sm:px-5 sm:text-sm">
                  Status:{" "}
                  <span className="font-semibold">{productData?.status}</span>
                </p>
              </div>
              <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                <p className="px-3 py-1 text-xs sm:px-5 sm:text-sm">
                  Product Code:{" "}
                  <span className="font-semibold">
                    {productData?.product_code}
                  </span>
                </p>
              </div>
              <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                <p className="px-3 py-1 text-xs sm:px-5 sm:text-sm">
                  Brand:{" "}
                  <span className="font-semibold">{productData?.brand}</span>
                </p>
              </div>
            </aside>
            <div>
              <h3 className="text-[18px] font-semibold sm:text-[20px] font-serif my-4">
                Key Features
              </h3>

              <p className="my-1 text-[15px] sm:text-[16px] font-serif">
                Model: iGame GeForce RTX 4060 Ti Ultra W DUO OC 16GB-V
              </p>
              <p className="my-1 text-[15px] sm:text-[16px] font-serif">
                Core Clock: Base:1830Mhz; Boost:2460Mhz
              </p>
              <p className="my-1 text-[15px] sm:text-[16px] font-serif">
                Memory Clock: 17Gbps
              </p>
              <p className="my-1 text-[15px] sm:text-[16px] font-serif">
                Memory Interface: 128bit
              </p>
              <p className="my-1 text-[15px] sm:text-[16px] font-serif">
                Output: 3x DP+HDMI
              </p>

              {/* <a className="text-[#e5330b] cursor-pointer mt-4 font-serif underline underline-offset-2">View More Info</a> */}
              <a className="text-[#e5330b] cursor-pointer mt-[10px] font-serif relative after:content-[''] after:block after:absolute after:w-full after:h-[2px] after:bg-[#e5330b] after:bottom-[-8px] after:transform after:origin-bottom-right after:scale-x-8 after:hover:scale-x-100">
                View More Info
              </a>
            </div>
          </div>

          <div className="inline-block">
            <div className="flex items-center justify-between px-3 py-2 mt-10 bg-red-100 rounded-full">
              <span className="mx-1 text-[30px]">
                <MdStars />
              </span>
              <span className="mx-1 text-[25px] font-semibold">450</span>
              <span className="mx-1">Star Points</span>
            </div>
          </div>
          <PaymentOptions price={data?.price} />

          <QuantityCalculation product={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
