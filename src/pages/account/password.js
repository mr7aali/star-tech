import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const PasswordPage = () => {
    return (
        <div>
            <h1>Change password page</h1>
        </div>
    );
};

export default PasswordPage;

PasswordPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}