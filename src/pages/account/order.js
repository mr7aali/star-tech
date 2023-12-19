import dynamic from 'next/dynamic';
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
import Image from 'next/image';
import { IoMdDoneAll } from "react-icons/io";


const OrderPage = () => {
    return (
        <div className='py-20 font-serif'>
            <ProfileNavbar />
            <div className='max-w-[970px] mx-auto'>
                <h1 className='text-[#3749bb] text-2xl px-2 pb-5'>
                    Order History
                </h1>


                <div className='rounded-md' style={{
                    border: "1px solid #eee",
                    boxShadow: "5px 5px 5px rgba(0,0,0,.03)"
                }}>


                    <div className='flex justify-between items-center px-5 py-2'>
                        <div className=''>
                            <h3 className='font-bold'>Order# 352537</h3>
                            <p className='font -light text-[14px]'>Date Added: 16 Aug 2023</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='rounded-full mx-[5px] h-[24px] w-[24px] bg-[#27AE60] flex justify-center items-center '>
                                <IoMdDoneAll  className='text-white font-bold text-[18px]'/>
                            </div>

                            <span>Shipped</span>
                        </div>
                    </div>

                    {/* bg-[#fafafa] */}
                    <div className='grid grid-cols-12 bg-slate-100 px-5 py-4'>
                        <div className='flex items-center col-span-9'>
                            <Image
                                src="https://www.startech.com.bd/image/cache/catalog/RAM/VENG_LPX_BLK_01-228x228.png"
                                width={52}
                                height={52}
                                alt="" />
                            <h2 className='ml-4 font-serif'>Corsair Vengeance LPX 8GB 3200MHz DDR4 Desktop RAM</h2>
                        </div>
                        <div className='flex justify-between items-center col-span-3'>
                            <p className='text-[#ef4a23] text-[18px] font-bold '>2,910 <span className='font-serif'>৳</span> </p>
                            <button className='btn'>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;

OrderPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}