import { useState } from "react";
import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
import CardSIdeBar from "../ui/CardSIdeBar";
import ProfileHeader from "../AccountPages/ProfileHeader";


const AccountLayouts = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <CardSIdeBar open={open} setOpen={setOpen} />
            <NavBar />
            <main className="bg-white pt-14">
                <ProfileHeader />
                {children}
            </main>
            <Footer />
        </>
    );
};

export default AccountLayouts;