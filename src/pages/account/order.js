import dynamic from 'next/dynamic';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));

const OrderPage = () => {
    return (
        <div>
            <ProfileNavbar />
            <h1>Order pageF</h1>
        </div>
    );
};

export default OrderPage;

OrderPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}