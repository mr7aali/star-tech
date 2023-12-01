import React, { useEffect } from 'react';
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
const FilteringOption = () => {
    const [open, setOpen] = useState(true)
    const arrowControls = useAnimation();
    const rotateVariants = {
        open: { rotate: 0 },
        closed: { rotate: -180 },
    };
    useEffect(() => {
        async function updateAnimation() {
            await arrowControls.start(open ? 'open' : 'closed');
        }
        updateAnimation();
    }, [open, arrowControls]);
    return (
        <div style={{ boxShadow: '0 1px 1px rgba(0,0,0,.1)' }} className="bg-white rounded-md py-3 mb-2" >
            <div onClick={() => setOpen(!open)} className="relative cursor-pointer">
                <h2 className="text-[18px] ml-5 font-semibold pb-3 ">Availability</h2>
                <motion.div
                    animate={arrowControls}
                    variants={rotateVariants}
                    transition={{ duration: .3 }}
                    className={`absolute top-1 text-[18px] right-[17px]  ${open ? "" : "rotate-180"}`}>
                    <IoIosArrowUp />
                </motion.div>
            </div>

            <AnimatePresence>
                {
                    open &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ borderTop: '1px solid #ecedef' }}
                        className="flex flex-col px-5"
                    >
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
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
};

export default FilteringOption;