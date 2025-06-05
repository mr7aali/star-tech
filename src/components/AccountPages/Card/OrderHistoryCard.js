import Link from "next/link";
import Image from "next/image";
import { IoMdDoneAll } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const OrderHistoryCard = ({
  orderNumber = "352537",
  dateAdded = "2023-08-16",
  status = "Shipped",
  productName = "Corsair Vengeance LPX 8GB 3200MHz DDR4 Desktop RAM",
  productImageUrl = "https://www.startech.com.bd/image/cache/catalog/RAM/VENG_LPX_BLK_01-228x228.png",
  price = 2910,
  orderId = "352537",
}) => {
  return (
    <article
      className="
        my-4 mx-2 sm:mx-4 rounded-lg bg-white border border-gray-200
        group hover:shadow-xl hover:bg-gradient-to-br hover:from-[#ef4a23]/10 hover:to-[#3749bb]/10
        transform transition-all duration-300 ease-in-out
      "
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
    >
      <Link
        href={`/orders/${orderId}`}
        className="block p-4 sm:p-6 focus-visible:ring-2 focus-visible:ring-[#3749bb] rounded-lg"
        aria-label={`View details for order ${orderNumber}`}
      >
        {/* Header: Order Info and Status */}
        <header className="flex flex-col items-start justify-between gap-3 pb-3 border-b border-gray-100 sm:flex-row sm:items-center sm:gap-4 sm:pb-4">
          <div>
            <h3
              className="text-sm font-semibold tracking-tight sm:text-base"
              style={{ color: "#3749bb" }}
            >
              Order #{orderNumber}
            </h3>
            <p
              className="text-xs text-gray-500 sm:text-sm"
              style={{ color: "#666" }}
            >
              Placed on{" "}
              {new Date(dateAdded).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <div
            className="flex items-center gap-2 bg-gradient-to-r from-[#27AE60] to-[#45D788] text-white px-3 py-1 rounded-full animate-pulse-subtle"
            aria-describedby={`status-${orderId}`}
          >
            <IoMdDoneAll className="text-sm sm:text-base" />
            <span
              id={`status-${orderId}`}
              className="text-xs font-medium sm:text-sm"
            >
              {status}
            </span>
          </div>
        </header>

        {/* Body: Product Info and Action */}
        <div className="grid grid-cols-12 gap-3 pt-3 sm:gap-4 sm:pt-4">
          <div className="flex items-center col-span-12 sm:col-span-7 md:col-span-8">
            <Image
              src={productImageUrl}
              width={40}
              height={40}
              className="object-cover rounded-md sm:w-12 sm:h-12 md:w-14 md:h-14 ring-1 ring-gray-200"
              alt={productName}
              priority
            />
            <h2
              className="ml-3 text-xs font-medium sm:ml-4 sm:text-sm md:text-base line-clamp-2"
              style={{ color: "#333" }}
            >
              {productName}
            </h2>
          </div>
          <div className="flex flex-col items-start justify-between col-span-12 gap-3 sm:col-span-5 md:col-span-4 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-[#ef4a23] text-sm sm:text-base md:text-lg font-bold">
              {price.toLocaleString("en-BD")}{" "}
              <span className="font-serif">৳</span>
            </p>
            <button
              className="
                flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2
                text-xs sm:text-sm font-semibold text-white
                bg-gradient-to-r from-[#3749bb] to-[#263ccf]
                hover:from-[#4a5ed1] hover:to-[#3749bb]
                rounded-full transform hover:scale-105
                transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#ef4a23]
              "
              aria-label={`View details for order ${orderNumber}`}
            >
              <FaEye className="text-xs sm:text-sm group-hover:animate-bounce-subtle" />
              View
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default OrderHistoryCard;
