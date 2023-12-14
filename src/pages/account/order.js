import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const OrderPage = () => {
    return (
        <div>
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