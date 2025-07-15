/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { LuCopyPlus } from "react-icons/lu";

const ProductCard = ({ product }) => {
  //   console.log(product);
  console.log(product?.key_features?.split(";"));
  return (
    <div className="relative flex flex-col lg:max-w-[220px] bg-white rounded-md">
      <div
        style={{ borderRadius: "0px 15px 15px 0px" }}
        className="absolute top-2 bg-[#6e2594]"
      >
        <span className="text-[12px] text-[#fff] p-2">Earn Point: 100</span>
      </div>
      <aside style={{ borderBottom: "3px solid rgba(55,73,187,.03)" }}>
        <Link
          href={"/product/id"}
          className="mt-3 border-red-400 border-solid border-3"
        >
          <Image
            className="mx-auto cursor-pointer"
            src={
              product.image ||
              "https://via.placeholder.com/500x500?text=No+Image"
            }
            width={210}
            height={210}
            alt={product.title || "Product Image"}
          />
        </Link>
      </aside>
      <div className="px-5 py-2">
        <Link
          href={"/product/id"}
          className="font-serif duration-100 text-[#111] hover:text-[#ef4a23]  text-[17px] hover:underline cursor-pointer"
        >
          {product.title}
        </Link>
      </div>

      <ul className="py-5 mx-5 list-item">
        {product?.key_features?.split(";").map((feature, index) => (
          <li
            key={index}
            className="text-[13px] font-serif list-disc opacity-75 font-medium ml-2"
          >
            {feature}
          </li>
        ))}
      </ul>
      <div style={{ borderBottom: "1px solid #eee" }} className="flex-1"></div>
      <p className="text-[17px] font-semibold text-[#ef4a23] py-3 text-center font-mono">
        {" "}
        153,000৳
      </p>

      <div className="pb-2">
        <div className="flex mx-3 duration-150 py-1 rounded hover:bg-[#3749bb] hover:text-white justify-center items-center font-serif text-[#3749bb] cursor-pointer bg-[rgba(55,73,187,.05)]">
          <IoCart />
          <span className="ml-2 text-[15px]">Buy Now</span>
        </div>
        <div className="flex mx-3 duration-150 my-2 py-1 rounded hover:bg-[#f1f3f5]  justify-center items-center font-serif text-black opacity-75 cursor-pointer">
          <LuCopyPlus />
          <small className="ml-2">Add to Compare</small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
