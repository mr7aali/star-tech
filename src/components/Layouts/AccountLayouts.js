import { useState } from "react";
import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
import CardSIdeBar from "../ui/CardSIdeBar";
import ProfileHeader from "../AccountPages/ProfileHeader";
import ProfileNavbar from "../AccountPages/AccountProfileNavbar";
import { useDispatch, useSelector } from "react-redux";
import Providers from "@/lib/Providers";


const AccountLayouts = ({ children }) => {


    return (
        <Providers>
            <NavBar />
            <main className="bg-white pt-14">
                <ProfileHeader />
                {/* <ProfileNavbar /> */}
                {children}
            </main>
            <Footer />
        </Providers>
    );
};

export default AccountLayouts;