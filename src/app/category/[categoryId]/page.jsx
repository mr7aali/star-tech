"use client";
import dynamic from "next/dynamic";
import { use } from "react";
import { useGetCategoryByIdQuery } from "../../../redux/api/baseApi";
import CustomLoader from "@/components/sheared/CustomLoader";
const Pagination = dynamic(() =>
  import("@/components/CategoryIdPage/Pagination")
);
const ProductFiltering = dynamic(() =>
  import("@/components/CategoryIdPage/ProductFiltering")
);

import RangleSlider from "@/components/CategoryIdPage/RangleSlider";

import ProductCard from "@/components/card/ProductCard";
const FilteringOption = dynamic(() =>
  import("@/components/CategoryIdPage/FilteringOption")
);

const CategoryIdPage = ({ params }) => {
  const { categoryId } = use(params);
  const { data, isLoading } = useGetCategoryByIdQuery(categoryId);

  return (
    <div className="grid grid-cols-12 max-w-[1290px] mx-auto mt-12 gap-5 px-2">
      <div className="hidden col-span-3 lg:block">
        <RangleSlider />
        <FilteringOption title="Availability" />
        <FilteringOption title="Processor" />
        <FilteringOption title="RAM" />
        <FilteringOption title="SSD" />
      </div>
      <div className="flex flex-col col-span-12 lg:col-span-9">
        <ProductFiltering />
        <div className="grid gap-3 px-2 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:px-0 lg:flex lg:flex-wrap lg:justify-center">
          {!isLoading &&
            data?.data?.products?.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          {isLoading && (
            <div className="flex items-center justify-center w-full h-[50vh]">
              <CustomLoader />
            </div>
          )}
        </div>
        {!isLoading && data?.data?.products?.length === 0 && (
          <div className="flex items-center justify-center flex-1 w-full text-center text-gray-500">
            <p> No products found in this category.</p>
          </div>
        )}
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryIdPage;
