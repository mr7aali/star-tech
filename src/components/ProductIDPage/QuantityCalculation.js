import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const QuantityCalculation = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="grid grid-cols-2 items-center w-1/2">
            <div className="flex my-[40px] w-[138px] " style={{ border: '1px solid #edf2f5' }}>
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
            <button className="btn w-full">Buy Now</button>
        </div>
    );
};

export default QuantityCalculation;