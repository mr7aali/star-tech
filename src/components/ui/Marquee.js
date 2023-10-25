import React from 'react';

const Marquee = () => {
    return (
        <div style={{ borderRadius: '33px' }} className="max-w-[1290px] mx-auto flex items-center py-2 px-5 bg-[#fff]">
            <marquee behavior="scroll" direction="left" className="text-[20] font-mono">26th October Thursday, our all outlets are open. Additionally, our online activities are open and operational.</marquee>
        </div>
    );
};

export default Marquee;