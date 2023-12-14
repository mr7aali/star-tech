
import { FaRegNewspaper, FaUserLock, FaComputer } from "react-icons/fa6";
import { TbDatabaseDollar } from "react-icons/tb";
import { MdEditLocationAlt, MdPassword } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";


export const ProfileNavItems = [
    { path: "/account/order", title: "Orders", Icon: FaRegNewspaper },
    { path: "/account/edit", title: "Edit Profile", Icon: FaUserLock },
    { path: "/account/password", title: "Change Password", Icon: MdPassword },
    { path: "/account/address", title: "Addresses", Icon: MdEditLocationAlt },
    { path: "/account/wishlist", title: "Wish List", Icon: FaHeart },
    { path: "/account/pc", title: "Saved PC", Icon: FaComputer },
    { path: "/account/reward", title: "Star Points", Icon: PiShootingStarThin },
    { path: "/account/transaction", title: "Your Transactions", Icon: TbDatabaseDollar },
]