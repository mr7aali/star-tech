import dynamic from "next/dynamic";
import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
import { useState } from "react";
// import CardSIdeBar from "../ui/CardSIdeBar";
const CardSIdeBar = dynamic(() => import('../ui/CardSIdeBar'), { ssr: false });
const RootLayouts = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <div>

            <CardSIdeBar open={open} setOpen={setOpen} />

            <NavBar cartOpen={open} setCartOpen={setOpen} />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayouts;