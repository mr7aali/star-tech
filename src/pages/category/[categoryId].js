import FilteringOption from "@/components/CategoryIdPage/FilteringOption";
import Pagination from "@/components/CategoryIdPage/Pagination";
import ProductFiltering from "@/components/CategoryIdPage/ProductFiltering";
import RangleSlider from "@/components/CategoryIdPage/RangleSlider";
import RootLayouts from "@/components/Layouts/RootLayouts";
import ProductCard from "@/components/card/ProductCard";

const CategoryIdPage = () => {
    return (
        <div className="grid grid-cols-12 max-w-[1290px] mx-auto mt-12 gap-5 px-2" >
            <div className=" hidden lg:block col-span-3 " >

                <FilteringOption />
                {/* <FilteringOption />
                <FilteringOption />
                <FilteringOption /> */}
                <RangleSlider />

            </div>
            <div className="col-span-12 lg:col-span-9 ">
                <ProductFiltering />
                <div className=" grid sm:grid-cols-2 md:grid-cols-3 px-2 lg:px-0  lg:flex lg:flex-wrap lg:justify-center gap-3 mt-5"  >
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

CategoryIdPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}

