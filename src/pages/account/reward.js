import dynamic from 'next/dynamic';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));

const RewardPage = () => {
    return (
        <div>
             <ProfileNavbar />
            <h1>Reward page</h1>
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