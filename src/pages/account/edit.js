import AccountLayouts from '@/components/Layouts/AccountLayouts';
import React from 'react';

const EditPage = () => {
    return (
        <div>
            <h1>Edit page</h1>
        </div>
    );
};

export default EditPage;

EditPage.getLayout = function getLayout(page) {
    return (
        <AccountLayouts>
            {page}
        </AccountLayouts>
    );
}