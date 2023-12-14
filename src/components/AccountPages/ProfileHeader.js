import Image from "next/image";


const ProfileHeader = () => {
    return (
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
    );
};

export default ProfileHeader;