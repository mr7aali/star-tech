"use client";
import dynamic from "next/dynamic";

const Pagination = dynamic(() =>
  import("@/components/CategoryIdPage/Pagination")
);
const ProductFiltering = dynamic(() =>
  import("@/components/CategoryIdPage/ProductFiltering")
);
const RangleSlider = dynamic(() =>
  import("@/components/CategoryIdPage/RangleSlider")
);

const ProductCard = dynamic(() => import("@/components/card/ProductCard"));
const FilteringOption = dynamic(() =>
  import("@/components/CategoryIdPage/FilteringOption")
);

const CategoryIdPage = () => {
  return (
    <div className="grid grid-cols-12 max-w-[1290px] mx-auto mt-12 gap-5 px-2">
      <div className="hidden col-span-3 lg:block">
        <RangleSlider />
        <FilteringOption title="Availability" />
        <FilteringOption title="Processor" />
        <FilteringOption title="RAM" />
        <FilteringOption title="SSD" />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <ProductFiltering />
        <div className="grid gap-3 px-2 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:px-0 lg:flex lg:flex-wrap lg:justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryIdPage;
