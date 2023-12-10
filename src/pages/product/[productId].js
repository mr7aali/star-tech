/* eslint-disable react/no-unescaped-entities */
import RootLayouts from "@/components/Layouts/RootLayouts";
import SingleFeatures from "@/components/ProductIDPage/SingleFeatures";
import RelatedProductCard from "@/components/ProductIDPage/RelatedProductCard";
import { convertSpecificationData } from "@/helpers/convertObjectToArray";
import ProductDetails from "@/components/ProductIDPage/ProductDetails";


const ProductDetailsPage = ({ data }) => {

    const specificationData = convertSpecificationData(data?.Specification);


    return (
        <>

            <section>
                <ProductDetails data={data} />
            </section>

            <section className=" max-w-[1290px] mx-auto mt-5 grid grid-cols-12 gap-5 px-3">
                {/* left */}
                <div className="col-span-12 lg:col-span-9 " >
                    <div className="sm:flex justify-center sm:justify-start sm:items-center">


                        {
                            ["Specification", "Description", "Questions", "Reviews"]
                                .map((Item, index) => (
                                    <div key={index}
                                        style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}
                                        className={`${index === 0 ? "bg-[#ef4a23] text-white" : "bg-white text-black"} py-1 my-1 sm:my-0 sm:py-2 px-3 sm:px-5 mr-2 sm:mr-5 rounded  hover:text-white inline-block  hover:bg-[#ef4a23]  cursor-pointer`}>
                                        <p className=" font-semibold text-[10px] sm:text-[14px]">{Item}</p>
                                    </div>
                                ))
                        }

                    </div>

                    <div className="bg-white rounded-md  mt-5 px-3 sm:px-5">
                        <h2 className="font-semibold text-[20px] py-5">Specification</h2>
                        {
                            specificationData
                                ?.map((specification, index) =>
                                    <SingleFeatures
                                        key={index}
                                        data={specification}
                                    />)
                        }


                    </div>

                </div>

                {/* Right */}
                <div className="hidden lg:block h-auto col-span-3 rounded-md ">
                    <div className="bg-white px-5" style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}>
                        <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[15px] xl:text-[17px]">Related Product</h2>
                        <RelatedProductCard />
                    </div>

                    <div className="bg-white mt-5 px-5" style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}>
                        <h2 className="text-[#3749bb] font-bold text-center  py-4 text-[15px] xl:text-[17px]">Recently Viewed</h2>
                        {/* <RelatedProductCard /> */}
                    </div>


                </div>


            </section>
        </>
    );
};
export default ProductDetailsPage;


export async function getStaticPaths() {
    const baseURL = process.env.BASE_URL;
    const res = await fetch(`${baseURL}/api/v1/product/`);
    const data = await res.json();

    const paths = data?.data.map((product) => ({
        params: { productId: product.id.toString() }
    }))


    return { paths, fallback: true }
}


export async function getStaticProps(context) {
    const baseURL = process.env.BASE_URL;
    const { params } = context
    const res = await fetch(`${baseURL}/api/v1/product/${params.productId}`);
    const data = await res.json();

    return {
        props: { data: data.data }
    }
}




ProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}

