import React, { useState } from 'react';
import ShopingCardButton from './ShopingCardButton';

const CardSIdeBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div onClick={() => setOpen(!open)}>
                <ShopingCardButton />
            </div>
            {
                open && <div className="fixed flex h-screen w-[350px] bg-slate-500 right-0 z-50">
                    <button onClick={() => setOpen(!open)}>Close</button>
                </div>
            }
        </>
    );
};

export default CardSIdeBar;