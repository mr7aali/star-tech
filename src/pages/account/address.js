import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const AddressPage = () => {
    return (
        <div>
            <h1>Address page</h1>
        </div>
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