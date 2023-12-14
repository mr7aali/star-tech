import { FaRegNewspaper, FaUserLock, FaComputer } from "react-icons/fa6";
import { TbDatabaseDollar } from "react-icons/tb";
import { MdEditLocationAlt, MdPassword } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";
import AccountLayouts from '@/components/Layouts/AccountLayouts';
import ProfileOptionCard from '@/components/AccountPages/ProfileOptionCard';
import Link from "next/link";


const AccountHomePage = () => {
    const Items = [
        { path: "/account/order", title: "Orders", Icon: FaRegNewspaper },
        { path: "/account/edit", title: "Edit Profile", Icon: FaUserLock },
        { path: "/account/password", title: "Change Password", Icon: MdPassword },
        { path: "/account/address", title: "Addresses", Icon: MdEditLocationAlt },
        { path: "/account/wishlist", title: "Wish List", Icon: FaHeart },
        { path: "/account/pc", title: "Saved PC", Icon: FaComputer },
        { path: "/account/reward", title: "Star Points", Icon: PiShootingStarThin },
        { path: "/account/transaction", title: "Your Transactions", Icon: TbDatabaseDollar },

    ]
    return (
        <section className='bg-white py-16'>
            <main className='max-w-[970px] mx-auto grid grid-cols-4 gap-3'>
                {
                    Items.map((item, i) =>
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