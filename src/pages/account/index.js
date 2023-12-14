import AccountLayouts from '@/components/Layouts/AccountLayouts';
import ProfileOptionCard from '@/components/AccountPages/ProfileOptionCard';
import Link from "next/link";
import {  ProfileNavItems } from "@/components/AccountPages/constant";


const AccountHomePage = () => {
    return (
        <section className='bg-white py-16'>
            <main className='max-w-[970px] mx-auto grid grid-cols-4 gap-3'>
                {
                    ProfileNavItems.map((item, i) =>
                        <Link
                            key={i}
                            href={item.path}
                        >
                            <ProfileOptionCard
                                title={item.title}
                                Icon={item.Icon}
                            />
                        </Link>)
                }
            </main>
        </section>
    );
};

export default AccountHomePage;


AccountHomePage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}