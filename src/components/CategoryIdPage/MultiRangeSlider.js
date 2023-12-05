import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
// import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className="relative">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="thumb thumb--left w-full"
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
                // style={{ border: "1px solid blue" }}
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right w-full"
            />

            <div className="slider w-full relative " >
                <div className="slider__track" />
                <div ref={range} className="slider__range   bg-[#ef4a23]" />

                {/* <div className="slider__left-value "><span className="text-black">{minVal}</span></div>
                <div className="slider__right-value"><span className="text-black">{maxVal}</span></div> */}

            </div>
      
                <div   className="flex pt-6 pb-3 justify-center  " >
                   
                    <input className="outline-none w-full text-center mr-8 border border-1"  type="text" value={minVal} />
                    <input className="outline-none w-full text-center ml-8 border border-1"  type="text" value={maxVal} />
                </div>
           
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
