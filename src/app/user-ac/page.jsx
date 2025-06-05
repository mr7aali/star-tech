"use client";
import AccountProfileNavbar from "@/components/AccountPages/AccountProfileNavbar";
import { ProfileNavItems } from "@/components/AccountPages/constant";
import ProfileHeader from "@/components/AccountPages/ProfileHeader";
import ProfileOptionCard from "@/components/AccountPages/ProfileOptionCard";
import Footer from "@/components/sheared/Footer";
import CardSIdeBar from "@/components/ui/CardSIdeBar";
import AccountMenu from "@/components/UserAccountPage/AccountMenu";
import AddressSecion from "@/components/UserAccountPage/AddressSecion";
import EditSection from "@/components/UserAccountPage/EditSection";
import OrderSecion from "@/components/UserAccountPage/OrderSecion";
import PasswordSection from "@/components/UserAccountPage/PasswordSection";
import PcSection from "@/components/UserAccountPage/PcSection";
import RewardSection from "@/components/UserAccountPage/RewardSection";
import TtransactionSection from "@/components/UserAccountPage/TtransactionSection";
import WishlistSection from "@/components/UserAccountPage/WishlistSection";
import Link from "next/link";
import React, { useState } from "react";
//  { path: "/account/order", title: "Orders", Icon: FaRegNewspaper },
//     { path: , title: "Edit Profile", Icon: FaUserLock },
//     { path: , title: "Change Password", Icon: MdPassword },
//     { path: , title: "Addresses", Icon: MdEditLocationAlt },
//     { path: , title: "Wish List", Icon: FaHeart },
//     { path:, title: "Saved PC", Icon: FaComputer },
//     { path: , title: "Star Points", Icon: PiShootingStarThin },
//     { path: , title: "Your Transactions", Icon: TbDatabaseDollar },
// ]
const TestPage = () => {
  const [componentName, setComponentName] = useState("AccountMenu");
  const [open, setOpen] = useState(false);
  let content;
  if (componentName === "AccountMenu") {
    content = <AccountMenu setComponentName={setComponentName} />;
  } else if (componentName === "/account/order") {
    content = <OrderSecion />;
  } else if (componentName === "/account/edit") {
    content = <EditSection />;
  } else if (componentName === "/account/password") {
    content = <PasswordSection />;
  } else if (componentName === "/account/address") {
    content = <AddressSecion />;
  } else if (componentName === "/account/wishlist") {
    content = <WishlistSection />;
  } else if (componentName === "/account/pc") {
    content = <PcSection />;
  } else if (componentName === "/account/reward") {
    content = <RewardSection />;
  } else if (componentName === "/account/transaction") {
    content = <TtransactionSection />;
  } else {
    content = <AccountMenu />;
  }
  console.log(componentName);
  return (
    <>
      <main className="bg- white pt-14 bg-[rgba(55,73,187,0.05)]">
        <ProfileHeader />

        <section className="">
          {componentName !== "AccountMenu" && (
            <AccountProfileNavbar setComponentName={setComponentName} />
          )}

          {content}
        </section>
      </main>
      {/* <CardSIdeBar open={open} setOpen={setOpen} cart={cart} /> */}
      <Footer />
    </>
  );
};

export default TestPage;
