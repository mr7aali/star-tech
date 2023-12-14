import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const TransactionPage = () => {
    return (
        <div>
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