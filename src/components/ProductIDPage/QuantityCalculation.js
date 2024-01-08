import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import ShoppingCardModal from "../ui/ShoppingCardModal";

const QuantityCalculation = () => {
    const [count, setCount] = useState(0);
    const [modelOpen, setModelOpen] = useState(false);
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
                <button onClick={()=>setModelOpen(true)} className="btn w-full">Buy Now</button>
            </div>
            <ShoppingCardModal  modelOpen={modelOpen} setModelOpen={setModelOpen}/>
        </>
    );
};

export default QuantityCalculation;