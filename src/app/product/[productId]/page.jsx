"use client";
import { use } from "react";
import { convertSpecificationData } from "@/helpers/convertObjectToArray";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import SingleFeatures from "@/components/ProductIDPage/SingleFeatures";
import RelatedProductCard from "@/components/ProductIDPage/RelatedProductCard";
import ProductDetails from "@/components/ProductIDPage/ProductDetails";

const ProductDetailsPage = ({ params }) => {
  const { productId } = use(params);
  const { data } = useGetProductByIdQuery(productId);
  const specificationData = convertSpecificationData(data?.data.Specification);
  return (
    <div className="pb-12">
      <ProductDetails data={data} />
      <section className=" max-w-[1290px] mx-auto mt-5 grid grid-cols-12 gap-5 px-3">
        {/* left */}
        <div className="col-span-12 lg:col-span-9">
          <div className="justify-center sm:flex sm:justify-start sm:items-center">
            {["Specification", "Description", "Questions", "Reviews"].map(
              (Item, index) => (
                <div
                  key={index}
                  style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}
                  className={`${
                    index === 0
                      ? "bg-[#ef4a23] text-white"
                      : "bg-white text-black"
                  } py-1 my-1 sm:my-0 sm:py-2 px-3 sm:px-5 mr-2 sm:mr-5 rounded  hover:text-white inline-block  hover:bg-[#ef4a23]  cursor-pointer`}
                >
                  <p className=" font-semibold text-[10px] sm:text-[14px]">
                    {Item}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="px-3 mt-5 bg-white rounded-md sm:px-5">
            <h2 className="font-semibold text-[20px] py-5">Specification</h2>
            {specificationData?.map((specification, index) => (
              <SingleFeatures key={index} data={specification} />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hidden h-auto col-span-3 rounded-md lg:block">
          <div
            className="px-5 bg-white"
            style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}
          >
            <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[15px] xl:text-[17px]">
              Related Product
            </h2>
            <RelatedProductCard />
          </div>

          <div
            className="px-5 mt-5 bg-white"
            style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}
          >
            <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[15px] xl:text-[17px]">
              Recently Viewed
            </h2>
            <RelatedProductCard />
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductDetailsPage;
