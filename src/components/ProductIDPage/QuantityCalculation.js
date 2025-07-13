import { useState } from "react";
import { LuMinus, LuPlus, LuShoppingCart } from "react-icons/lu";
import ShoppingCardModal from "../ui/ShoppingCardModal";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";

const QuantityCalculation = ({ product }) => {
  const [count, setCount] = useState(1);
  const [modelOpen, setModelOpen] = useState(false);
  const dispatch = useDispatch();

  const setToCart = () => {
    const productData = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: count,
    };
    dispatch(addToCart(productData));
    setCount(1);
  };

  return (
    <>
      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
        <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
          <span className="mr-3 w-2 h-8 bg-gradient-to-b from-red-500 to-pink-600 rounded-full"></span>
          Purchase Options
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Quantity Selector */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Quantity
            </label>
            <div className="flex items-center p-2 bg-gray-50 rounded-xl border border-gray-200">
              <button
                onClick={() => setCount((c) => (count > 1 ? c - 1 : c))}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={count <= 1}
              >
                <LuMinus className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex-1 text-center">
                <span className="px-4 text-2xl font-bold text-gray-900">
                  {count}
                </span>
              </div>

              <button
                onClick={() => setCount((c) => c + 1)}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-300"
              >
                <LuPlus className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="text-sm text-gray-500">
              Available:{" "}
              <span className="font-semibold text-green-600">In Stock</span>
            </div>
          </div>

          {/* Buy Button */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Total Price
            </label>
            <div className="mb-4 text-3xl font-bold text-gray-900">
              {(product?.price * count).toLocaleString()} ৳
            </div>

            <button
              onClick={() => {
                setToCart();
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <LuShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => {
                setToCart();
                // Add buy now logic here
              }}
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="pt-6 mt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <div className="mr-2 w-2 h-2 bg-green-500 rounded-full"></div>
              Free Shipping
            </div>
            <div className="flex items-center text-gray-600">
              <div className="mr-2 w-2 h-2 bg-blue-500 rounded-full"></div>
              Secure Payment
            </div>
            <div className="flex items-center text-gray-600">
              <div className="mr-2 w-2 h-2 bg-purple-500 rounded-full"></div>
              Easy Returns
            </div>
            <div className="flex items-center text-gray-600">
              <div className="mr-2 w-2 h-2 bg-orange-500 rounded-full"></div>
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      <ShoppingCardModal modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </>
  );
};

export default QuantityCalculation;
