import { FaRegNewspaper, FaUserLock, FaComputer } from "react-icons/fa6";
import { TbDatabaseDollar } from "react-icons/tb";
import { MdEditLocationAlt, MdPassword } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";
import AccountLayouts from '@/components/Layouts/AccountLayouts';
import ProfileOptionCard from '@/components/AccountPages/ProfileOptionCard';


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
            <main className='max-w-[970px] mx-auto grid grid-cols-4 gap-3'>
                {
                    Items.map((item, i) =>
                        <ProfileOptionCard
                            key={i}
                            title={item.title}
                            Icon={item.Icon}
                        />)
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