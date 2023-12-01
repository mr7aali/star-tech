import FilteringOption from "@/components/CategoryIdPage/FilteringOption";
import RootLayouts from "@/components/Layouts/RootLayouts";

const CategoryIdPage = () => {
    return (
        <div className="grid grid-cols-12 max-w-[1290px] mx-auto mt-12 gap-5">
            <div className="col-span-3 " >

                <FilteringOption />
                <FilteringOption />
                <FilteringOption />
                <FilteringOption />

            </div>
            <div className="col-span-9 bg-white rounded-md">
                <h3>Gimbal Title</h3>
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

