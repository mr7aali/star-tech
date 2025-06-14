"use client";
import OrderHistoryCard from "@/components/AccountPages/Card/OrderHistoryCard";
import CardSIdeBar from "@/components/ui/CardSIdeBar";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProfileNavbar = dynamic(() =>
  import("@/components/AccountPages/AccountProfileNavbar")
);

const OrderPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <div className="font-serif py -2">
      <ProfileNavbar />
      <div className="max-w-[970px] mx-auto ">
        <h1 className="text-[#3749bb] text-2xl px-2 py-5">Order History</h1>

        <OrderHistoryCard />
        <OrderHistoryCard />
        <OrderHistoryCard />
      </div>
      <CardSIdeBar
        open={open}
        setOpen={setOpen}
        cart={cart}
        dispatch={dispatch}
      />
    </div>
  );
};

export default OrderPage;
