"use client";
import FeaturedProductsCart from "../card/FeaturedProductsCart";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import CustomLoader from "../sheared/CustomLoader";
const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <>
      <div className="mt-12">
        <h3 className="text-center text-[26px] md:text-[30px] font-bold font-serif">
          Featured Products
        </h3>
        <p className="text-center text-[#01132d] mt-2 mb-3 text-[15px] md:text-[18px] opacity-90 font-serif">
          Check & Get Your Desired Product!
        </p>
      </div>
      <div className="max-w-[1290px] mx-auto mt-11 flex flex-wrap justify-center">
        {isLoading === false &&
          data?.success === true &&
          data?.data.map((Item, index) => (
            <FeaturedProductsCart product={Item} key={index} />
          ))}
        {isLoading && <CustomLoader />}
      </div>
    </>
  );
};

export default FeaturedProducts;
