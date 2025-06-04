"use client";
import Link from "next/link";
import { ProfileNavItems } from "@/components/AccountPages/constant";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CardSIdeBar = dynamic(() => import("@/components/ui/CardSIdeBar"));

const ProfileOptionCard = dynamic(() =>
  import("@/components/AccountPages/ProfileOptionCard")
);

const AccountHomePage = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <section className="py-16 bg-white">
      <main className="max-w-[970px] mx-auto grid grid-cols-4 gap-3">
        {ProfileNavItems.map((item, i) => (
          <Link key={i} href={item.path}>
            <ProfileOptionCard title={item.title} Icon={item.Icon} />
          </Link>
        ))}
      </main>
      <CardSIdeBar
        open={open}
        setOpen={setOpen}
        cart={cart}
        dispatch={dispatch}
      />
    </section>
  );
};

export default AccountHomePage;
