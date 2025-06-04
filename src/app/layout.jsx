"use client";
import "./globals.css";
import Footer from "@/components/sheared/Footer";
import NavBar from "@/components/sheared/NavBar";
// import Footer from "../sheared/Footer";
// import NavBar from "../sheared/NavBar";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { useState } from "react";

const RootLayouts = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <html>
      <body>
        <>
          <NavBar cartOpen={open} setCartOpen={setOpen} />
          <Provider store={store}>{children}</Provider>
          <Footer />
        </>
      </body>
    </html>
  );
};

export default RootLayouts;
