import CardSIdeBar from "@/components/ui/CardSIdeBar";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileNavbar = dynamic(() =>
  import("@/components/AccountPages/AccountProfileNavbar")
);

const WishlistPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ProfileNavbar />
      <div className="max-w-[970px] mx-auto">
        <h1 className="text-[#3749bb] text-2xl px-2 py-5">My Wish List</h1>

        <p className="px-2 py-10">Your wish list is empty.</p>
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

export default WishlistPage;
