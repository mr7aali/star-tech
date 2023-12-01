import React from 'react';

const SingleFeatures = () => {
    return (

        <div className="pb-5">
            <h3 className="text-[#3749bb] font-bold px-3 py-2 text-[16px] bg-[rgba(55,73,187,.05)] rounded-md">Display Features</h3>

            <p className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: '1px solid #ecedef' }}>
                <span className="opacity-80">Display Size</span>
                <span className="font-semibold">27-Inch</span>
            </p>
            <p className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: '1px solid #ecedef' }}>
                <span className="opacity-80">Display Type</span>
                <span className="font-semibold">LED</span>
            </p>
            <p className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: '1px solid #ecedef' }}>
                <span className="opacity-80">Viewing Angle</span>
                <span className="font-semibold">Horizontal Viewing Angle: 178°
                    Vertical Viewing Angle: 178°</span>
            </p>
            <p className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: '1px solid #ecedef' }}>
                <span className="opacity-80">Display Size</span>
                <span className="font-semibold">27-Inch</span>
            </p>

        </div>
    );
};

export default SingleFeatures;