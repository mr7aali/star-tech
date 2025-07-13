"use client";

import NavBar from "@/components/sheared/NavBar";
import Footer from "@/components/sheared/Footer";
import { useState } from "react";
import CardSIdeBar from "../ui/CardSIdeBar";
import { useDispatch, useSelector } from "react-redux";

const RootLayoutWithRedux = ({ children }) => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar cartOpen={open} setCartOpen={setOpen} />
      {children}
      <Footer />
      <CardSIdeBar
        open={open}
        setOpen={setOpen}
        cart={cart}
        dispatch={dispatch}
      />
    </>
  );
};

export default RootLayoutWithRedux;
