"use client";
// import { useGetCategoriesQuery } from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const FeaturedCategory = () => {
  // const dispatch = useDispatch();
  // const { data, isLoading } = useGetCategoriesQuery();
  // if (!isLoading && data.success === true && data.data.length > 0) {
  //   dispatch(setCategories(data?.data));
  // }

  const categories = useSelector((state) => state.categories.categories);

  return (
    <section className="max-w-[1300px] mx-auto">
      <div className="mt-12">
        <h3 className="text-center text-[26px] md:text-[30px] font-bold font-serif">
          Featured Category
        </h3>
        <p className="text-center text-[#01132d] mt-2 mb-3 text-[15px] md:text-[18px] opacity-90 font-serif">
          Get Your Desired Product from Featured Category!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mx-3 mt-10 sm:grid-cols-4 lg:grid-cols-8">
        {categories?.map((item, index) => (
          <Link
            href={`/category/${item.id}`}
            key={index}
            className="bg-white rounded-xl shadow-md cursor-pointer hover:shadow-inner hover:text-[#ef4a23]"
          >
            <div className="flex flex-col items-center justify-center gap-5 py-3 xl:py-5">
              <span>
                <Image src={item.image} alt="Gimbal" width="48" height="48" />
              </span>
              <p className="mt-1 xl:mt-2 text-[11px] sm:text-[12px] xl:text-[15px] px-1">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategory;
