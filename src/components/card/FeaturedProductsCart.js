import Image from "next/image";


const FeaturedProductsCart = () => {
    return (
        <div
        //  style={{border:'1px solid blue'}}  px-5
        className="w-[250px] bg-[#fff]  rounded-md shadow-md mb-5 mx-2">
        <div style={{ borderBottom: "3px solid rgba(55,73,187,.03)" }}>
            <Image className="mx-auto cursor-pointer" src="https://www.startech.com.bd/image/cache/catalog/monitor/acer/ek220q-h3bi/ek220q-h3bi-05-200x200.webp" width={210} height={210} alt=""  />
        </div>
        <div className="px-5 py-2">
            <p className="font-serif  text-[#111] hover:text-[#ef4a23]  text-[17px] hover:underline cursor-pointer">ACER EK220Q H3bi 21.5 inch 1ms 100hz Borderless Full HD Monitor</p>
            <p className="text-[17px] font-semibold text-[#ef4a23] py-3"> 153,000৳</p>
        </div>
    </div>
    );
};

export default FeaturedProductsCart;