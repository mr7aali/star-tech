import Image from "next/image";
import Link from "next/link";

const FeaturedProductsCart = ({ product }) => {
  return (
    <div className="w-[220px] sm:w-[250px] relative bg-[#fff]  rounded-md hover:shadow-inner shadow-md m-2 flex flex-col">
      <div
        style={{ borderRadius: "0px 15px 15px 0px" }}
        className="absolute top-2 bg-[#6e2594]"
      >
        <span className="text-[12px] text-[#fff] p-2">Earn Point: 100</span>
      </div>
      <aside style={{ borderBottom: "3px solid rgba(55,73,187,.03)" }}>
        <Link
          href={`/product/${product.id}`}
          className="mt-3 border-red-400 border-solid border-3"
        >
          <Image
            className="mx-auto cursor-pointer"
            // src="https://www.startech.com.bd/image/cache/catalog/monitor/acer/ek220q-h3bi/ek220q-h3bi-05-200x200.webp"
            src={product.image}
            width={210}
            height={210}
            alt=""
          />
        </Link>
      </aside>

      <div className="flex-1 h-full px-5 py-2">
        <Link
          href={`/product/${product.id}`}
          className="font-serif text-[#111] hover:text-[#ef4a23]  text-[17px] hover:underline cursor-pointer"
        >
          {product.title}
        </Link>
      </div>
      <p className="text-[17px] px-5 static bottom-0 font-semibold text-[#ef4a23] py-3">
        {product.price}
        <span className="font-serif">৳</span>
      </p>
    </div>
  );
};

export default FeaturedProductsCart;
