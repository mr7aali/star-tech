"use client";
import Providers from "@/lib/Providers";
import Footer from "@/components/sheared/Footer";
import ProfileHeader from "@/components/AccountPages/ProfileHeader";

const AccountLayouts = ({ children }) => {
  return (
    <Providers>
      {/* <NavBar /> */}
      <main className="bg- white pt-14 bg-[rgba(55,73,187,0.05)]">
        <ProfileHeader />
        {/* <ProfileNavbar /> */}
        {children}
      </main>
      <Footer />
    </Providers>
  );
};

export default AccountLayouts;
