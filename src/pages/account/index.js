import Link from "next/link";
import { ProfileNavItems } from "@/components/AccountPages/constant";
import dynamic from 'next/dynamic';
// import AccountLayouts from "@/components/Layouts/AccountLayouts";
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileOptionCard = dynamic(() => import('@/components/AccountPages/ProfileOptionCard'));

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