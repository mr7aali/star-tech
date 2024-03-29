/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertSpecificationData } from "@/helpers/convertObjectToArray";

import dynamic from 'next/dynamic';
const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));
const SingleFeatures = dynamic(() => import("@/components/ProductIDPage/SingleFeatures"));
const RelatedProductCard = dynamic(() => import("@/components/ProductIDPage/RelatedProductCard"));
const ProductDetails = dynamic(() => import("@/components/ProductIDPage/ProductDetails"));
const CardSIdeBar = dynamic(() => import("@/components/ui/CardSIdeBar"));



const ProductDetailsPage = ({ data }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const specificationData = convertSpecificationData(data?.Specification);
    const [open, setOpen] = useState(false);

    return (
        <>
            <ProductDetails data={data} />
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
            <CardSIdeBar
                open={open}
                setOpen={setOpen}
                cart={cart}
                dispatch={dispatch}
            />
        </>
    );
};
export default ProductDetailsPage;

export async function getServerSideProps(context) {

    const baseURL = process.env.BASE_URL;
    const { params } = context
    const res = await fetch(`${baseURL}/api/v1/product/${params.productId}`);
    const data = await res?.json();

    return {
        props: { data: data?.data }
    }
}
ProductDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}