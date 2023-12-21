const RootLayouts = dynamic(() => import('@/components/Layouts/RootLayouts'));
const ProfileHeader = dynamic(() => import('@/components/AccountPages/ProfileHeader'));
import dynamic from 'next/dynamic';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));


const WishlistPage = () => {
    return (
        <div>
            <ProfileNavbar />
            <div className='max-w-[970px] mx-auto'>
                <h1 className='text-[#3749bb] text-2xl px-2 py-5'>
                    My Wish List
                </h1>

                <p className='py-10 px-2'>Your wish list is empty.</p>
            </div>
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