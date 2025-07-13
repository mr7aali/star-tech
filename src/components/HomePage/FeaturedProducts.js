import FeaturedProductsCart from "../card/FeaturedProductsCart";
import { useGetProductsQuery } from "@/redux/api/baseApi";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading === false && data?.success === true) {
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
          {data?.data.map((Item, index) => (
            <FeaturedProductsCart product={Item} key={index} />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="max-w-[1290px] mx-auto mt-11 flex flex-wrap justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-16 h-16 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-center">Loading...</p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
