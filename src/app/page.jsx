import Banner from "@/components/HomePage/Banner";
import Blog from "@/components/HomePage/Blog";
import FeaturedCategory from "@/components/HomePage/FeaturedCategory";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import MainBlog from "@/components/HomePage/MainBlog";

export default async function HomePage() {
  return (
    <>
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts />
      <MainBlog />
      <Blog />
      <div className="mt-[100px]"></div>
    </>
  );
}
