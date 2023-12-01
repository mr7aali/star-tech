import RootLayouts from "@/components/Layouts/RootLayouts";

const CategoryIdPage = () => {
    return (
        <div>
            <h1>Category pageF</h1>
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