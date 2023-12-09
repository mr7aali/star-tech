
import React, { useRef, useState } from 'react';
import ShopingCardButton from './ShopingCardButton';
import { AiOutlineClose } from "react-icons/ai"
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';



const CardSIdeBar = ({open,setOpen}) => {
    
    const cart = [1, 0, 1, 2, 3, 4, 5, 9, 40, 54, 4, 6]
    const ref = useRef(null)
    useClickAway(ref, () => setOpen(!open))

    return (
        <div>


            <div className='hidden lg:block' onClick={() => setOpen(!open)}>
                <ShopingCardButton />
            </div>

            <AnimatePresence >
                {
                    open &&
                    <>
                        <motion.div

                            // {...framerSidebarPanel}
                            initial={{ x: "100%", opacity: .3 }}
                            animate={{ opacity: 1, x: "0" }}
                            transition={{
                                duration: .3
                            }}

                            exit={{ x: "100%", opacity: .3 }}

                            ref={ref}
                            aria-label="Sidebar"
                            className="fixed h-screen max-w-[350px] right-0 z-50 bg-[#fff] shadow-2xl ">
                            <div className='relat ive h-full overflow-x-scroll'>

                                <div className='bg-[#01132d] absolute w-full p-5 flex justify-between items-center'>
                                    <p className='text-[15px] font-bold font-mono  text-white uppercase '>Your Cart</p>
                                    <button aria-label="close sidebar" onClick={() => setOpen(!open)} className='text-white text-[25px] cursor-pointer '><AiOutlineClose /></button>
                                </div>

                                <div>
                                    <h1 className='text-center mt-5 font-sans font-semibold text-red-400'>Your shopping cart is empty!</h1>
                                </div>
                                {/* //! cart container */}
                                <div  >
                                    {
                                        cart.map((item, index) => (
                                            <div key={index} style={{ borderBottom: "1px solid #eee" }} className='p-5 flex items- center'>
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
                                        ))
                                    }

                                </div>



                            </div>
                            <div className='absolute bg-white bottom-0 shadow-2xl w-full'>
                                <div className='bg-slate-300 px-2 py-3 flex justify-between items-center'>
                                    <div className='flex-1 pr-2'>
                                        <input type="text" className='outline-none px-2 py-2 text-[15px] font-serif  w-full pr-2  rounded-sm' placeholder='Promo Code' />
                                    </div>
                                    <div>
                                        <button className='btn'>Apply</button>
                                    </div>
                                </div>
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
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </div>
    );
};

export default CardSIdeBar;


const framerSidebarPanel = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: .3 },
}
