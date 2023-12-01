import FilteringOption from "@/components/CategoryIdPage/FilteringOption";
import Pagination from "@/components/CategoryIdPage/Pagination";
import ProductFiltering from "@/components/CategoryIdPage/ProductFiltering";
import RootLayouts from "@/components/Layouts/RootLayouts";
import ProductCard from "@/components/card/ProductCard";

const CategoryIdPage = () => {
    return (
        <div className="grid grid-cols-12 max-w-[1290px] mx-auto mt-12 gap-5">
            <div className="col-span-3 " >

                <FilteringOption />
                <FilteringOption />
                <FilteringOption />
                <FilteringOption />

            </div>
            <div className="col-span-9 ">
                <ProductFiltering />
                <div className="flex flex-wrap justify-center gap-3 mt-5"  >
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

