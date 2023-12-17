import dynamic from 'next/dynamic';
const AccountLayouts = dynamic(() => import('@/components/Layouts/AccountLayouts'));
const ProfileNavbar = dynamic(() => import('@/components/AccountPages/AccountProfileNavbar'));

const PcPage = () => {
    return (
        <div>
             <ProfileNavbar />
            <h1>Saved Pc page</h1>
        </div>
    );
};

export default PcPage;

PcPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}