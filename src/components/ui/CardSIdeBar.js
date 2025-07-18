import React, { useRef } from "react";
import ShopingCardButton from "./ShopingCardButton";
import { AiOutlineClose } from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useClickAway } from "react-use";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useSelector } from "react-redux";

const CardSIdeBar = ({ open, setOpen, dispatch }) => {
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const cart = useSelector((state) => state.cart.cart);
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
        <div className="relative h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-900">
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
                      src={item.image}
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
            <div className="flex items-center justify-center h-full px-4">
              <div className="text-center">
                <FaShoppingCart className="mx-auto mb-3 text-4xl text-gray-400" />
                <p className="text-base font-medium text-gray-500">
                  Your shopping cart is empty!
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="absolute bottom-0 w-full p-4 bg-white shadow-inner">
            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-md">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full p-2 pl-8 text-sm bg-white rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Promo Code"
                  aria-label="Enter promo code"
                />
                <RiCouponLine className="absolute text-gray-400 transform -translate-y-1/2 left-2 top-1/2" />
              </div>
              <button
                className="px-4 py-2 text-sm text-white transition duration-200 bg-orange-500 rounded-md hover:bg-orange-600"
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
                  {(Array.isArray(cart)
                    ? cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                    : 0
                  ).toLocaleString("en-US")}{" "}
                  ৳
                </span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-200">
                <span className="text-sm font-medium text-right text-gray-500">
                  Total
                </span>
                {/* <span className="text-sm font-bold text-right text-gray-800">
                  {cart
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString("en-US")}
                  ৳
                </span> */}
                <span className="text-sm font-bold text-right text-gray-800">
                  {(Array.isArray(cart)
                    ? cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                    : 0
                  ).toLocaleString("en-US")}{" "}
                  ৳
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/cart"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-orange-500 transition duration-200 bg-orange-100 rounded-md hover:bg-orange-200"
                aria-label="View cart details"
              >
                <FaShoppingCart className="text-base" />
                View Cart
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white transition duration-200 transform bg-orange-500 rounded-md cursor-pointer hover:bg-orange-600 hover:scale-105"
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
