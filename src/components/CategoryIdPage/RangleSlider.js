import React from 'react';
import ReactSlider from "react-slider"
import MultiRangeSlider from './MultiRangeSlider';
const RangleSlider = () => {
    return (
        <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    );
};

export default RangleSlider;