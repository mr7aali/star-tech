import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const PcPage = () => {
    return (
        <div>
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