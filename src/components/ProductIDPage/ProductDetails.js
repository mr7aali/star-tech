import Image from "next/image";
import PaymentOptions from "./PaymentOptions";
import QuantityCalculation from "./QuantityCalculation";
import {
  MdStars,
  MdVerified,
  MdLocalShipping,
  MdSecurity,
} from "react-icons/md";
import { LsKey } from "@/shared/type";

const ProductDetails = ({ data }) => {
  const productData = data?.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Image Section */}
          <div className="space-y-6">
            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg">
              <div className="relative group">
                <Image
                  src={
                    productData?.image
                      ? productData?.image
                      : "https://via.placeholder.com/500x500?text=No+Image"
                  }
                  alt={productData?.title || "Product image"}
                  className="object-cover w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                  width={500}
                  height={500}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-full">
                    Hot Deal
                  </span>
                </div>
              </div>
            </div>
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 text-center bg-white rounded-xl border border-gray-100 shadow-sm">
                <MdVerified className="mx-auto mb-2 w-8 h-8 text-green-500" />
                <p className="text-sm font-medium text-gray-700">Verified</p>
              </div>
              <div className="p-4 text-center bg-white rounded-xl border border-gray-100 shadow-sm">
                <MdLocalShipping className="mx-auto mb-2 w-8 h-8 text-blue-500" />
                <p className="text-sm font-medium text-gray-700">
                  Fast Delivery
                </p>
              </div>
              <div className="p-4 text-center bg-white rounded-xl border border-gray-100 shadow-sm">
                <MdSecurity className="mx-auto mb-2 w-8 h-8 text-purple-500" />
                <p className="text-sm font-medium text-gray-700">Secure</p>
              </div>
            </div>{" "}
            {/* <PaymentOptions price={productData?.price} /> */}
          </div>

          {/* Product Info Section */}
          <div className="space-y-8">
            {/* Product Title */}
            <div>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                {productData?.title}
              </h1>

              {/* Star Points */}
              <div className="inline-flex items-center px-6 py-3 mb-6 text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                <MdStars className="mr-2 w-6 h-6" />
                <span className="text-xl font-bold">450</span>
                <span className="ml-2 font-medium">Star Points</span>
              </div>
            </div>

            {/* Product Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full border border-blue-200">
                <p className="text-sm font-semibold text-blue-800">
                  Price: <span className="text-lg">{productData?.price} ৳</span>
                </p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 rounded-full border border-green-200">
                <p className="text-sm font-semibold text-green-800">
                  Status: <span className="text-lg">{productData?.status}</span>
                </p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full border border-purple-200">
                <p className="text-sm font-semibold text-purple-800">
                  Brand: <span className="text-lg">{productData?.brand}</span>
                </p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200">
                <p className="text-sm font-semibold text-gray-800">
                  Code:{" "}
                  <span className="text-lg">{productData?.product_code}</span>
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
              <h3 className="flex items-center mb-4 text-2xl font-bold text-gray-900">
                <span className="mr-3 w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                Key Features
              </h3>
              <div className="space-y-3">
                {productData?.key_features?.split(";").map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="leading-relaxed text-gray-700">
                      {feature.trim()}
                    </p>
                  </div>
                ))}
              </div>

              <button className="flex items-center mt-6 font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 group">
                View More Info
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-200 transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <PaymentOptions price={productData?.price} />
        </div>
        <div className="mt-10">
          <QuantityCalculation product={productData} />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
