"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ProfileNavItems } from "@/components/AccountPages/constant";
import ProfileHeader from "@/components/AccountPages/ProfileHeader";
// import ProfileHeader from "@/components/ProfileHeader";

const CardSIdeBar = dynamic(() => import("@/components/ui/CardSIdeBar"));
const ProfileOptionCard = dynamic(() =>
  import("@/components/AccountPages/ProfileOptionCard")
);

const AccountHomePage = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-[970px] mx-auto px-4 sm:px-6">
        {/* Options Grid */}
        <main className="">
          <nav
            className="grid grid-cols-1 gap-4 mt-6 sm:gap-6 sm:mt-8 xs:grid-cols-2 lg:grid-cols-4"
            aria-label="Profile navigation"
          >
            {ProfileNavItems.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="group focus:ring-2 focus:ring-[#ef4a23] rounded-lg"
                aria-label={`Navigate to ${item.title}`}
              >
                <ProfileOptionCard title={item.title} Icon={item.Icon} />
              </Link>
            ))}
          </nav>
        </main>
      </div>
      <CardSIdeBar open={open} setOpen={setOpen} cart={cart} />
    </section>
  );
};

export default AccountHomePage;
