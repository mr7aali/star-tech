import React from 'react';
import ReactSlider from "react-slider"
import { IoIosArrowUp } from "react-icons/io";
import MultiRangeSlider from './MultiRangeSlider';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
const RangleSlider = () => {
  return (
    <div style={{ boxShadow: '0 1px 1px rgba(0,0,0,.1)' }} className="bg-white rounded-md py-3 mb-2" >
      <div style={{ borderBottom: '1px solid #ecedef' }} className="relative cursor-pointer">
        <h2 className="text-[18px] ml-5 font-semibold pb-3 ">Price Range</h2>

      </div>

      <div className='mx-5 mt-5'>
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>
    </div>
  );
};

export default RangleSlider;