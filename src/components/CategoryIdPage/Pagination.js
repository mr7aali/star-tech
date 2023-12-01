import { useState } from "react";


const Pagination = () => {
    const [active, setActive] = useState(1);
   
    return (
        <div className="flex justify-center md:justify-between my-5 items-center">

            <ul className="flex ">

                {
                    ["PREV", "1", "2", "3", "5", "6", "7", "8", "9", "NEXT"].map((Item,index) =>
                        <li onClick={()=>setActive(index)} key={Item} className={`${ (active === index) ? "bg-[#ef4a23] text-white":""} px-2  py-1 sm:px-3 sm:mx-2  sm:py-2 rounded-sm hover:underline hover:text-white hover:bg-[#ef4a23]  cursor-pointer text-[12px] sm:text-[14px] font-semibold font-mono duration-100`}>{Item}</li>
                    )
                }

            </ul>

            <div className="hidden md:block">
                <p className="font-serif">Showing 61 to 80 of 645 (33 Pages)</p>
            </div>
        </div>
    );
};

export default Pagination;