import { SearchOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import Image from "next/image";
import Marquee from "../ui/Marquee";

const SwiperBanner = dynamic(() => import("../ui/SwiperBanner"), { ssr: true });
// const Marquee = dynamic(() => import("../ui/Marquee"), { ssr: false });

const Banner = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:grid-cols-12">
        {/* Main Banner Section */}
        <div className="lg:col-span-9">
          <SwiperBanner />
        </div>

        {/* Sidebar Section */}
        <div className="grid grid-cols-1 gap-6 lg:col-span-3 sm:grid-cols-2 lg:grid-cols-1">
          {/* Compare Products Card */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Compare Products
            </h3>
            <p className="mt-1 mb-4 text-sm text-center text-gray-500">
              Choose Two Products to Compare
            </p>

            <div className="space-y-3">
              <div className="relative">
                <input
                  className="w-full p-2.5 text-sm bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400"
                  placeholder="Search & Select Product"
                  type="text"
                />
                <SearchOutlined className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
              </div>

              <div className="relative">
                <input
                  className="w-full p-2.5 text-sm bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400"
                  placeholder="Search & Select Product"
                  type="text"
                />
                <SearchOutlined className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
              </div>

              <button className="w-full py-2.5 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition duration-200">
                View Comparison
              </button>
            </div>
          </div>

          {/* Promo Image Card */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              width={300}
              height={190}
              src="https://www.startech.com.bd/image/catalog/ads/2025/complain-mini-banner.webp"
              alt="Promotional Banner"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
};

export default Banner;
