import React from 'react';

const SingleFeatures = ({ data }) => {



    return (

        <div className="pb-5">
            <h3 className="text-[#3749bb] font-bold px-3 py-2 text-[14px] sm:text-[16px] bg-[rgba(55,73,187,.05)] rounded-md">
                {data?.specificationName}
            </h3>

            {
                data?.specification.map((Item, index) => (
                    <p key={index} className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: '1px solid #ecedef' }}>
                        <span className="opacity-80 text-[12px] sm:text-[14px]">
                            {Item.featureName.replace(/_/g, ' ')}

                        </span>
                        <span className="font-semibold col-span-2 md:col-span-1 text-[12px] sm:text-[14px]">{Item.feature}
                        </span>
                    </p>
                ))
            }


        </div>
    );
};

export default SingleFeatures;