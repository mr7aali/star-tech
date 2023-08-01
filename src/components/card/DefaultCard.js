import React from 'react';

const DefaultCard = ({ comName, icon }) => {
    return (
        <div className=''>
            <div className="h-[60px] flex justify-between mt-10">
                <div className="flex ">
                    <div style={{ background: "rgba(55, 73, 187, 0.1)" }} className="rounded-md w-[60px] h-[60px] flex justify-center items-center">
                        {/* <BsCpu className="text-4xl text-[#3749bb]" /> */}
                        <div className="text-4xl text-[#3749bb]">
                            {icon && React.createElement(icon)}
                        </div>
                    </div>
                    <div className="title ml-5">
                        <div className="text-[12px] font-bold mb-3">{comName}</div>
                        <div className="pr-2 h-[12px] w-[300px] bg-[#F2F3F4]">
                        </div>
                    </div>
                </div>
                <div className="right-side flex items-center ">
                    <div className="pr-2 h-[12px] w-[79px] bg-[#F2F3F4] ">
                
                    </div>
                    <div style={{ border: "1px solid #F2F3F4" }} className="w-[1px] h-[50px] mx-10"></div>
                    <div >
                        <button style={{ border: '2px solid #3749bb' }} className="px-5 py-[10px] rounded-md text-[#3749bb] font-bold text-sm">Choose</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultCard;