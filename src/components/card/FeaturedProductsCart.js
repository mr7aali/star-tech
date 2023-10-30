import Image from "next/image";


const FeaturedProductsCart = () => {
    return (
        <div  className="w-[220px] sm:w-[250px] relative bg-[#fff]  rounded-md hover:shadow-inner shadow-md m-2">
            <div style={{ borderRadius: "0px 15px 15px 0px" }} className="absolute top-2 bg-[#6e2594]">
                <span className="text-[12px] text-[#fff] p-2">Earn Point: 100</span>
            </div>
            <div className="mt-3" style={{ borderBottom: "3px solid rgba(55,73,187,.03)" }}>
                <Image className="mx-auto cursor-pointer" src="https://www.startech.com.bd/image/cache/catalog/monitor/acer/ek220q-h3bi/ek220q-h3bi-05-200x200.webp" width={210} height={210} alt="" />
            </div>
            <div className="px-5 py-2">
                <p className="font-serif  text-[#111] hover:text-[#ef4a23]  text-[17px] hover:underline cursor-pointer">ACER EK220Q H3bi 21.5 inch 1ms 100hz Borderless Full HD Monitor</p>
                <p className="text-[17px] font-semibold text-[#ef4a23] py-3"> 153,000৳</p>
            </div>
        </div>
    );
};

export default FeaturedProductsCart;