import dynamic from 'next/dynamic';
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));


const TransactionPage = () => {
    return (
        <div>
            <ProfileNavbar />
            <div className='max-w-[970px] mx-auto'>
                <h1 className='text-[#3749bb] text-2xl px-2 py-5'>
                    Your Transactions
                </h1>

                <p className='py-10 px-2'>Your Transactions
                    is empty.</p>
            </div>
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