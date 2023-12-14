import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";
const AccountLogOut = () => {


    return (<div className="ml-[15px] flex items-center cursor-pointer" >
        <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />
        <aside>
            <h3 className="text-[#fff] text-[15px]">Account</h3>
            <div className="text-[#acabab] text-[12px]">
                <Link
                    href={"/account"}
                >
                    <span key={"1"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Profile</span>



                </Link>
                <span> or </span>
                <Link
                    onClick={() => removeUserInfo()}
                    href={"/auth/login"}
                    className="py-1 cursor-pointer hover:text-[#ef4a23]">
                    Logout
                </Link>
            </div>
        </aside>
    </div>
    )
}

export default AccountLogOut;