import Link from "next/link";
import React from "react";
import ProfileOptionCard from "../AccountPages/ProfileOptionCard";
import { ProfileNavItems } from "../AccountPages/constant";

const AccountMenu = ({ setComponentName }) => {
  return (
    <div className="max-w-[970px] mx-auto px-4 sm:px-6">
      <nav
        className="grid grid-cols-1 gap-4 sm:gap-6 xs:grid-cols-2 lg:grid-cols-4"
        aria-label="Profile navigation"
      >
        {ProfileNavItems.map((item, i) => (
          <div
            key={i}
            onClick={() => setComponentName(item.path)}
            className="group focus:ring-2 focus:ring-[#ef4a23] rounded-lg"
            aria-label={`Navigate to ${item.title}`}
          >
            <ProfileOptionCard title={item.title} Icon={item.Icon} />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AccountMenu;
