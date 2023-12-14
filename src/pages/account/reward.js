import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const RewardPage = () => {
    return (
        <div>
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