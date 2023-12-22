import Link from 'next/link';
import { ProfileNavItems } from './constant';

const AccountProfileNavbar = () => {
    return (
        <div className='max-w-[970px] hidden lg:block mx-auto py-5 font-serif'>
            <div className='flex'>
                {
                    ProfileNavItems.map(item => (
                        <Link
                            href={item.path}
                            key={item.title}
                            className='flex py-5 pr-3 cursor-pointer hover:text-[#ef4a23] justify-center border-b-[3px] items-center hover:border-red-500 hover:border-b-[3px]'
                        >
                            <span className='text-xl text-[#666]'><item.Icon /></span>
                            <small className='text-sm ml-2 '>{item.title}</small>
                        </Link>


                    ))
                }
                <div className='flex-1 border-b-[3px]'></div>
            </div>
        </div>
    );
};

export default AccountProfileNavbar;