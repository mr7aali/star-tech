import React from 'react';

const AddAddressInitButton = () => {
    return (
        <div className='max-w-[970px] mx-auto '>
            <h1 className='text-[#3749bb] text-2xl font-semibold font-sans mx-2'>Address Book</h1>
            <div className='py-10 mx-2' style={{}} >
                <p style={{ border: '1px solid #eee' }} className='text-center py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer hover:text-[#ef4a23] w-full'><span className='text-[20px]'>+</span> New Address</p>
            </div>
        </div>
    );
};

export default AddAddressInitButton;