import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";
const AccountLogOut = () => {
  const handleLogout = async () => {
    const response = await fetch("/api/logout");
    if (response.ok) {
      window.location.href = "/auth/login";
    } else {
      console.error("Logout failed");
    }
  };
  return (
    <div className="ml-[15px] flex items-center cursor-pointer">
      <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />
      <aside>
        <h3 className="text-[#fff] text-[15px]">Account</h3>
        <div className="text-[#acabab] text-[12px]">
          <Link href={"/user-ac"}>
            <span
              key={"1"}
              className="py-1 cursor-pointer hover:text-[#ef4a23]"
            >
              Profile
            </span>
          </Link>
          <span> or </span>
          <span
            onClick={handleLogout}
            // href={"/auth/login"}
            className="py-1 cursor-pointer hover:text-[#ef4a23]"
          >
            Logout
          </span>
        </div>
      </aside>
    </div>
  );
};

export default AccountLogOut;
