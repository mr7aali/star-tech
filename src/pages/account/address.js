import CardSIdeBar from '@/components/ui/CardSIdeBar';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));
const AddAddressInitButton = dynamic(() => import('@/components/AccountPages/AddAddressInitButton'), { ssr: false });
const AddAdressFroms = dynamic(() => import('@/components/AccountPages/AddAdressFroms'), { ssr: true });

const AddressPage = () => {
    const [open, setOpen] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    return (
        <>
            <ProfileNavbar />
            <div className={`${open ? "" : "hidden"} `} onClick={() => setOpen(false)}>
                <AddAddressInitButton />
            </div>

            <div className={`${open ? "hidden" : ""} `}>
                <AddAdressFroms />
            </div>
            <CardSIdeBar
                open={openModal}
                setOpen={setOpenModal}
                cart={cart}
                dispatch={dispatch}
            />
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