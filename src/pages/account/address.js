
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));

const AddAddressInitButton = dynamic(() => import('@/components/AccountPages/AddAddressInitButton'), { ssr:true});
const AddAdressFroms = dynamic(() => import('@/components/AccountPages/AddAdressFroms'), { ssr: true });

const AddressPage = () => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <ProfileNavbar />


            <div className={`${open ? "" : "hidden"} `} onClick={() => setOpen(false)}>
                <AddAddressInitButton />
            </div>

            <div className={`${open ? "hidden" : ""} `}>
                <AddAdressFroms />
            </div>




        </>
    );
};

export default AddressPage;

AddressPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}