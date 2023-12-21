import OrderHistoryCard from '@/components/AccountPages/Card/OrderHistoryCard';
import dynamic from 'next/dynamic';
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));



const OrderPage = () => {
    return (
        <div className='py-2 font-serif'>
            <ProfileNavbar />
            <div className='max-w-[970px] mx-auto '>
                <h1 className='text-[#3749bb] text-2xl px-2 py-5'>
                    Order History
                </h1>

                <OrderHistoryCard />
                <OrderHistoryCard />
                <OrderHistoryCard />
            </div>
        </div>
    );
};

export default OrderPage;

OrderPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts >
            {page}
        </AccountLayouts>
    );
}