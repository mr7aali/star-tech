"use client";
import Banner from "@/components/HomePage/Banner";
import Blog from "@/components/HomePage/Blog";
import FeaturedCategory from "@/components/HomePage/FeaturedCategory";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import MainBlog from "@/components/HomePage/MainBlog";
import HeadTag from "@/components/sheared/HeaderTag";

export default function HomePage() {
  return (
    <>
      <HeadTag descriptionContent={"Star Tech HomePage"} title={"Star Tech"} />
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts />
      <MainBlog />
      <Blog />
      <div className="mt-[100px]"></div>
    </>
  );
}
