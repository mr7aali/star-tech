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
    <div className="pb-12 bg-[#f7f8fa] min-h-screen">
      <ProductDetails data={data} />
      <section className="max-w-[1290px] mx-auto mt-5 grid grid-cols-12 gap-5 px-3">
        {/* left */}
        <div className="col-span-12 lg:col-span-9">
          <div className="flex flex-wrap gap-2 justify-center mb-4 sm:justify-start sm:items-center sm:gap-4">
            {["Specification", "Description", "Questions", "Reviews"].map(
              (Item, index) => (
                <div
                  key={index}
                  style={{ boxShadow: "0 1px 1px rgba(0,0,0,.07)" }}
                  className={`$ {
                    index === 0
                      ? "bg-[#ef4a23] text-white"
                      : "bg-white text-black"
                  } py-1 my-1 sm:my-0 sm:py-2 px-3 sm:px-5 rounded hover:text-white inline-block hover:bg-[#ef4a23] cursor-pointer font-semibold text-[12px] sm:text-[15px] transition-colors duration-150`}
                >
                  <p>{Item}</p>
                </div>
              )
            )}
          </div>

          <div className="px-3 mt-5 bg-white rounded-lg border border-gray-100 shadow-md sm:px-5">
            <h2 className="font-semibold text-[20px] py-5 text-[#3749bb] border-b border-gray-100 mb-2">
              Specification
            </h2>
            {specificationData?.map((specification, index) => (
              <SingleFeatures key={index} data={specification} />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hidden col-span-3 space-y-5 h-auto rounded-md lg:block">
          <div className="px-5 bg-white rounded-lg border border-gray-100 shadow-md">
            <h2 className="text-[#3749bb] font-bold text-center py-4 text-[15px] xl:text-[17px] border-b border-gray-100 mb-2">
              Related Product
            </h2>
            <RelatedProductCard />
          </div>

          <div className="px-5 bg-white rounded-lg border border-gray-100 shadow-md">
            <h2 className="text-[#3749bb] font-bold text-center py-4 text-[15px] xl:text-[17px] border-b border-gray-100 mb-2">
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
