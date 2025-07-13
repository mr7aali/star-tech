import React, { useRef } from "react";
import ShopingCardButton from "./ShopingCardButton";
import { AiOutlineClose } from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useClickAway } from "react-use";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";

const CardSIdeBar = ({ cart, open, setOpen, dispatch }) => {
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  console.log(cart);
  return (
    <div>
      <div className="hidden lg:block" onClick={() => setOpen(!open)}>
        <ShopingCardButton length={cart?.length || 0} />
      </div>

      <div
        ref={ref}
        aria-label="Cart Sidebar"
        className={`fixed h-screen max-w-xs w-full right-0 top-0 z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto relative h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gray-900">
            <p className="text-sm font-bold text-white uppercase">Your Cart</p>
            <button
              aria-label="Close cart sidebar"
              onClick={() => setOpen(false)}
              className="text-xl text-white transition duration-200 hover:text-orange-500"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Cart Content */}
          {cart?.length > 0 ? (
            <div className="p-4 space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center pb-4 border-b border-gray-200"
                >
                  <div className="px-2">
                    <Image
                      width={60}
                      height={60}
                      src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g2412/g2412-06-47x47.webp"
                      alt={item.name || "Cart item"}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 px-2">
                    <p className="text-sm text-gray-800">{item.name}</p>
                    <p className="pt-1 text-sm font-bold text-gray-800">
                      {item.price}৳ x {item.quantity} ={" "}
                      {(item.price * item.quantity).toLocaleString("en-US")}৳
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    className="p-2 text-gray-600 transition duration-200 hover:text-orange-500"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center px-4 h-full">
              <div className="text-center">
                <FaShoppingCart className="mx-auto mb-3 text-4xl text-gray-400" />
                <p className="text-base font-medium text-gray-500">
                  Your shopping cart is empty!
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="absolute bottom-0 p-4 w-full bg-white shadow-inner">
            <div className="flex gap-2 items-center p-3 bg-gray-100 rounded-md">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="p-2 pl-8 w-full text-sm bg-white rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Promo Code"
                  aria-label="Enter promo code"
                />
                <RiCouponLine className="absolute left-2 top-1/2 text-gray-400 transform -translate-y-1/2" />
              </div>
              <button
                className="px-4 py-2 text-sm text-white bg-orange-500 rounded-md transition duration-200 hover:bg-orange-600"
                aria-label="Apply promo code"
              >
                Apply
              </button>
            </div>
            <div className="mt-3 space-y-2">
              <div className="grid grid-cols-2 py-2 border-b border-gray-200">
                <span className="text-sm font-medium text-right text-gray-500">
                  Sub-Total
                </span>
                <span className="text-sm font-bold text-right text-gray-800">
                  {cart
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString("en-US")}
                  ৳
                </span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-200">
                <span className="text-sm font-medium text-right text-gray-500">
                  Total
                </span>
                <span className="text-sm font-bold text-right text-gray-800">
                  {cart
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString("en-US")}
                  ৳
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/cart"
                className="flex gap-2 justify-center items-center px-4 py-3 text-sm font-medium text-orange-500 bg-orange-100 rounded-md transition duration-200 hover:bg-orange-200"
                aria-label="View cart details"
              >
                <FaShoppingCart className="text-base" />
                View Cart
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="flex gap-2 justify-center items-center px-4 py-3 text-sm font-bold text-white bg-orange-500 rounded-md transition duration-200 transform cursor-pointer hover:bg-orange-600 hover:scale-105"
                aria-label="Proceed to checkout"
                disabled={cart?.length === 0}
              >
                <FaShoppingCart className="text-base" />
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSIdeBar;
