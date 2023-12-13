import RootLayouts from '@/components/Layouts/RootLayouts';
import Image from 'next/image';
import { FaRegNewspaper, FaUserLock, FaComputer } from "react-icons/fa6";
import {  TbDatabaseDollar } from "react-icons/tb";
import { MdEditLocationAlt ,MdPassword } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";


const AccountHomePage = () => {
    const Items = [
        { title: "Orders", Icon: FaRegNewspaper },
        { title: "Edit Profile", Icon: FaUserLock },
        { title: "Change Password", Icon: MdPassword },
        { title: "Addresses", Icon: MdEditLocationAlt },
        { title: "Wish List", Icon: FaHeart },
        { title: "Saved PC", Icon: FaComputer },
        { title: "Star Points", Icon: PiShootingStarThin },
        { title: "Your Transactions", Icon: TbDatabaseDollar },

    ]
    return (
        <section className='bg-white py-16'>
            <header className='max-w-[970px] mx-auto flex justify-between items-center'>
                <div className='flex items-end'>
                    <aside>
                        <Image
                            width={80} height={80}
                            className='rounded-full'
                            src="https://www.gravatar.com/avatar/ec0e7bb5ba35678645248631e8e9f41c?s=70&d=mp&r=g" alt="" srcset="" />
                    </aside>
                    <aside className='ml-4 mb-1'>
                        <small className='text-xl'>Hello,</small>
                        <h3 className='text-2xl'>Sheikh Aali</h3>
                    </aside>
                </div>
                <div className='flex'>
                    <div className='px-7' style={{ borderLeft: '1px solid #ddd' }}>
                        <p className='text-[14px] opacity-80'>Star Points</p>
                        <h2 className='text-center text-[25px] text-[#ef4a23] font-serif'>0</h2>
                    </div>
                    <div className='px-7' style={{ borderLeft: '1px solid #ddd' }}>
                        <p className='text-[14px] opacity-80'>Store Credit</p>
                        <h2 className='text-center text-[25px] text-[#ef4a23] font-serif'>0</h2>
                    </div>
                </div>
            </header>
            <main className='max-w-[970px] mx-auto py-5 grid grid-cols-4 gap-3'>
                {
                    Items.map((item, index) => (
                        <div key={index} style={{ boxShadow: "4px 4px 4px rgba(0,0,0,.05)" }} href="#" className=' py-[40px] px-[20px] flex flex-col justify-center items-center rounded-md cursor-pointer border border-[#eee] hover:border-[#3749bb]'>
                            <span className='bg-[rgba(55,75,190,.1)] p-3 rounded-full text-[#3749bb]'> <item.Icon /></span>
                            <p className='pt-3 text-sm font-semibold'>Orders</p>
                        </div>
                    ))
                }
            </main>

        </section>
    );
};

export default AccountHomePage;


AccountHomePage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    );
}