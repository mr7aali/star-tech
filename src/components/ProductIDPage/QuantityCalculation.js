
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import ShoppingCardModal from "../ui/ShoppingCardModal";
import { useDispatch, } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";


const QuantityCalculation = ({ product }) => {
   
    const [count, setCount] = useState(1);
    const [modelOpen, setModelOpen] = useState(false);
    const dispatch = useDispatch();

    const setToCart = () => {
        const productData = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: count
        }
        dispatch(addToCart(productData))
        setCount(1);
    }



    return (
        <>
            <div className="grid grid-cols-2 items-center w-full md:w-2/3 lg:w-1/2">
                <div className="flex my-[40px]  w-[138px] " style={{ border: '1px solid #edf2f5' }}>
                    <div onClick={() => setCount((c) => (count > 0) ? c - 1 : c)} className="w-full hover:bg-gray-100 cursor-pointer flex justify-center items-center">
                        <LuMinus />
                    </div>
                    <div
                        className="w-full text-center py-2"
                        style={{
                            borderRight: '1px solid #edf2f5',
                            borderLeft: '1px solid #edf2f5'
                        }}
                    > {count}</div>
                    <div onClick={() => setCount((c) => c + 1)} className="w-full hover:bg-gray-100 cursor-pointer flex justify-center items-center">
                        <LuPlus />
                    </div>
                </div>
                <button onClick={() => {
                    // setModelOpen(true);
                    setToCart();
                }}
                    className="btn w-full">Buy Now</button>
            </div>
            <ShoppingCardModal modelOpen={modelOpen} setModelOpen={setModelOpen} />
        </>
    );
};

export default QuantityCalculation;
