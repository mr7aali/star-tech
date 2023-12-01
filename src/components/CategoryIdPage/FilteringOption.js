import React from 'react';
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const FilteringOption = () => {
    const [open, setOpen] = useState(true)
    return (
        <div style={{ boxShadow: '0 1px 1px rgba(0,0,0,.1)' }} className="bg-white rounded-md py-3 mb-2" >
            <div  onClick={() => setOpen(!open)} className="relative cursor-pointer">
                <h2 className="text-[18px] ml-5 font-semibold pb-3 ">Availability</h2>
                <div className={`absolute top-1 text-[18px] right-[17px]  ${open ? "" : "rotate-180"}`}>
                    <IoIosArrowUp />
                </div>
            </div>


            {
                open &&
                <div style={{ borderTop: '1px solid #ecedef' }} className="flex flex-col px-5" >
                    <label className="mt-1 ">
                        <input className="" type="checkbox" name="status" />
                        <span className="ml-2">In Stock</span>
                    </label>
                    <label className="mt-1 ">
                        <input className="" type="checkbox" name="status" />
                        <span className="ml-2">Pre Order</span>
                    </label>
                    <label className="mt-1 ">
                        <input className="" type="checkbox" name="status" />
                        <span className="ml-2">Up Comming</span>
                    </label>
                </div>
            }



        </div>
    )
};

export default FilteringOption;