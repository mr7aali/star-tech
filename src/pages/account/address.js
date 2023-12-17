
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));

const AddAddressInitButton = dynamic(() => import('@/components/AccountPages/AddAddressInitButton'),{ssr:false});
const AddAdressFroms = dynamic(() => import('@/components/AccountPages/AddAdressFroms'),{ssr:false});

const AddressPage = ({ countries }) => {
    const [open, setOpen] = useState(true)







    return (
        <>
            <ProfileNavbar />
            {
                open ?
                    <div className='' onClick={() => setOpen(false)}>
                        <AddAddressInitButton />
                    </div>
                    :

                    <AddAdressFroms />
            }



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


export async function getServerSideProps() {
    // const URL = "https://restcountries.com/v3.1/all";
    // const res = await fetch(URL);
    // const data = await res.json();
    return {
        props: {
            countries: []
        },
    }
}