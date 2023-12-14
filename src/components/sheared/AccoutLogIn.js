import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";

const AccoutLogIn = () => {
    return (
        <div className="ml-[15px] flex items-center cursor-pointer" >
            <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />

            <aside>
                <h3 className="text-[#fff] text-[15px]">Account</h3>
                <div className="text-[#acabab] text-[12px]">
                    <Link
                        href={"/auth/register"}
                    ><span key={"1d"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Register</span></Link>
                    <span> or </span>
                    <Link
                        href={"/auth/login"}
                        className="py-1 cursor-pointer hover:text-[#ef4a23]">
                        Login
                    </Link>
                </div>
            </aside>
        </div>
    )

}


export default AccoutLogIn;