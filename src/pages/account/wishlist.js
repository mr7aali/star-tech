import dynamic from 'next/dynamic';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));


const WishlistPage = () => {
    return (
        <div>
            <ProfileNavbar />
            <h1>Wish list page</h1>
        </div>
    );
};

export default WishlistPage;

WishlistPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}