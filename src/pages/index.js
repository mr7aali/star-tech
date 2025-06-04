// import RootLayouts from "@/components/Layouts/RootLayouts";
import Banner from "@/components/HomePage/Banner";
import Blog from "@/components/HomePage/Blog";
import FeaturedCategory from "@/components/HomePage/FeaturedCategory";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import MainBlog from "@/components/HomePage/MainBlog";
import HeadTag from "@/components/sheared/HeaderTag";
import CardSIdeBar from "@/components/ui/CardSIdeBar";
import dynamic from "next/dynamic";
// const RootLayouts = dynamic(() => import("../components/Layouts/RootLayouts"), {
//   loading: <h1>loading</h1>,
//   ssr: false,
// });
// const Banner = dynamic(() => import("@/components/HomePage/Banner"), {
//   loading: <h1>loading</h1>,
//   ssr: false,
// });
// const FeaturedCategory = dynamic(() =>
//   import("@/components/HomePage/FeaturedCategory")
// );
// const FeaturedProducts = dynamic(() =>
//   import("@/components/HomePage/FeaturedProducts")
// );
// const HeadTag = dynamic(() => import("@/components/sheared/HeaderTag"));
// const MainBlog = dynamic(() => import("@/components/HomePage/MainBlog"));
// const Blog = dynamic(() => import("@/components/HomePage/Blog"));
// const CardSIdeBar = dynamic(() => import("@/components/ui/CardSIdeBar"));

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage({ data }) {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <>
      <HeadTag descriptionContent={"Star Tech HomePage"} title={"Star Tech"} />
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts products={data?.data} />
      <MainBlog />
      <Blog />
      <div className="mt-[100px]"></div>
      <CardSIdeBar
        open={open}
        setOpen={setOpen}
        cart={cart}
        dispatch={dispatch}
      />
    </>
  );
}
HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export async function getServerSideProps() {
  const baseURL = process.env.BASE_URL;
  const res = await fetch(`${baseURL}/api/v1/product`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
