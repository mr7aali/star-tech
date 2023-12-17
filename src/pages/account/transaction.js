import dynamic from 'next/dynamic';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));

const TransactionPage = () => {
    return (
        <div>
             <ProfileNavbar />
            <h1>Transaction page</h1>
        </div>
    );
};

export default TransactionPage;

TransactionPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}