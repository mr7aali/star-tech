import React, { useState } from 'react';
import ShopingCardButton from './ShopingCardButton';
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai"
import Image from 'next/image';
const CardSIdeBar = () => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <div onClick={() => setOpen(!open)}>
                <ShopingCardButton />
            </div>
            {
                open &&

                <div className="fixed h-screen w-[350px] right-0 z-50 bg-[#fff] shadow-2xl ">
                    <div className='relative h-full'>

                        <div className='bg-[#01132d] p-5 flex justify-between items-center'>
                            <p className='text-[15px] font-bold font-mono  text-white uppercase '>Your Cart</p>
                            <span onClick={() => setOpen(!open)} className='text-white text-[25px] cursor-pointer'><AiOutlineClose /></span>
                        </div>
                        <div>
                            <div>
                                <h1 className='text-center mt-5 font-sans font-semibold text-red-400'>Your shopping cart is empty!</h1>
                            </div>

                            <div style={{ borderBottom: "1px solid #eee" }} className='p-5 flex items- center'>
                                <div className='px-1'>
                                    <Image
                                        width={60}
                                        height={60}
                                        src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g2412/g2412-06-47x47.webp" alt="" />
                                </div>
                                <div className='px-1'>
                                    <p className='text-[14px]'> Dahua Imou IPC-S6DP-3MOWEB 3MP Wi-Fi Bulb IP Camera</p>
                                    <p className='pt-1 font-bold font-mono'>3,600৳ x 1 = 3,600৳</p>

                                </div>
                                <div className='flex justify-center items-center cursor-pointer'>
                                    <span className='p-1 font-extrabold'>< AiOutlineClose /></span>
                                </div>
                            </div>
                        </div>

                        <div className='absolute bottom-0  w-full'>
                            <div className='px-5'>
                                <div style={{ borderBottom: "1px solid #eee" }} className='grid grid-cols-2'>
                                    <span className='text-right py-2 font-semibold font-mono text-[18px] opacity-50'>Sub-Total</span>
                                    <span className='text-right py-2 font-bold font-mono'>52,600</span>
                                </div>
                                <div style={{ borderBottom: "1px solid #eee" }} className='grid grid-cols-2'>
                                    <span className='text-right py-2 font-semibold font-mono text-[18px] opacity-50'>Total</span>
                                    <span className='text-right py-2 font-bold font-mono'>52,600</span>
                                </div>
                            </div>
                            <div className='bg-[#ef4a23] cursor-pointer'>
                                <p className='text-white text-center py-2 z-50 font-sans font-bold'>Checkout</p>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    );
};

export default CardSIdeBar;