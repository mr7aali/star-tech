import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

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

  // Handle text input changes
  const handleMinInputChange = (event) => {
    const value = Math.min(Number(event.target.value), maxVal - 1);
    if (!isNaN(value) && value >= min) {
      setMinVal(value);
      minValRef.current = value;
    }
  };

  const handleMaxInputChange = (event) => {
    const value = Math.max(Number(event.target.value), minVal + 1);
    if (!isNaN(value) && value <= max) {
      setMaxVal(value);
      maxValRef.current = value;
    }
  };

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
        className="w-full thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="w-full thumb thumb--right"
      />
      <div className="relative w-full slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range bg-[#ef4a23]" />
      </div>
      <div className="flex justify-center pt-6 pb-3">
        <input
          className="w-full mr-8 text-center border outline-none border-1"
          type="text"
          value={minVal}
          onChange={handleMinInputChange}
        />
        <input
          className="w-full ml-8 text-center border outline-none border-1"
          type="text"
          value={maxVal}
          onChange={handleMaxInputChange}
        />
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
