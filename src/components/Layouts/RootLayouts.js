import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
import { useState } from "react";

const RootLayouts = ({ children }) => {
   
    const [open, setOpen] = useState(false);
    return (
        <>
            <NavBar cartOpen={open} setCartOpen={setOpen} />
            {children}
            <Footer />
        </>
    );
};

export default RootLayouts;