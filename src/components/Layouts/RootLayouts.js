import dynamic from "next/dynamic";
import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
import { useState } from "react";
import { getCartDataToLocalStorage } from "@/helpers/localStorage";
import { KeyCartData } from "@/shared/type";
import Providers from "@/lib/Providers";
// import CardSIdeBar from "../ui/CardSIdeBar";
const CardSIdeBar = dynamic(() => import('../ui/CardSIdeBar'), { ssr: false });

const RootLayouts = ({ children }) => {
    const [card, setCard] = useState(getCartDataToLocalStorage(KeyCartData).cart)
    const [open, setOpen] = useState(false);
    return (
        <Providers >
            <CardSIdeBar
                card={card}
                setCard={setCard}
                open={open}
                setOpen={setOpen}
            />
            <NavBar cartOpen={open} setCartOpen={setOpen} />
            {children }
            <Footer />
        </Providers>
    );
};

export default RootLayouts;