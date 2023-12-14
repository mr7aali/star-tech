import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const WishlistPage = () => {
    return (
        <div>
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