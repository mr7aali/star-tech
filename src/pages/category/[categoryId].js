import FilteringOption from "@/components/CategoryIdPage/FilteringOption";
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
            <div className="col-span-9">
                <ProductFiltering />
               <ProductCard/>
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

