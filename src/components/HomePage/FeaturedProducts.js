import Image from "next/image";
import FeaturedProductsCart from "../card/FeaturedProductsCart";


const FeaturedProducts = () => {
    const cart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    return (
        <>
           
            <div className="mt-12">
                <h3 className="text-center text-[26px] md:text-[30px] font-bold font-serif">Featured Products</h3>
                <p className="text-center text-[#01132d] mt-2 mb-3 text-[15px] md:text-[18px] opacity-90 font-serif">Check & Get Your Desired Product!</p>
            </div>
            <div className="max-w-[1290px] mx-auto mt-11 flex flex-wrap justify-center">

                {
                    cart.map(Item => <FeaturedProductsCart key={Item} />)
                }
            </div>
        </>
    );
};

export default FeaturedProducts;