import CardSIdeBar from '@/components/ui/CardSIdeBar';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));

const RewardPage = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    return (
        <div>
            <ProfileNavbar />
            <div className='max-w-[970px] mx-auto'>
                <h1 className='text-[#3749bb] text-2xl px-2 py-5'>
                    Your Reward Points

                </h1>

                <p className='py-10 px-2'>Your Reward Points is empty.</p>
            </div>
            <CardSIdeBar
                open={open}
                setOpen={setOpen}
                cart={cart}
                dispatch={dispatch}
            />
        </div>
    );
};

export default RewardPage;

RewardPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}