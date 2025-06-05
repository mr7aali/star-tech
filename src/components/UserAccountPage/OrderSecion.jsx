import React from "react";
import OrderHistoryCard from "../AccountPages/Card/OrderHistoryCard";
import AccountProfileNavbar from "../AccountPages/AccountProfileNavbar";

const OrderSecion = () => {
  return (
    <div className="font-serif py -2">
      <div className="max-w-[970px] mx-auto ">
        <h1 className="text-[#3749bb] text-2xl px-2 py-5">Order History</h1>

        <OrderHistoryCard />
        <OrderHistoryCard />
        <OrderHistoryCard />
      </div>
      {/* <CardSIdeBar
        open={open}
        setOpen={setOpen}
        cart={cart}
        dispatch={dispatch}
      /> */}
    </div>
  );
};

export default OrderSecion;
