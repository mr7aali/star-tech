import { useEffect, useState } from "react";


const PaymentOptions = ({ price }) => {
  
    return (
        <div>
            <h3 className="text-[20px] font-serif my-4">Payment Options</h3>
            <div className="grid lg:grid-cols-2 gap-3 font-serif">
                <Options price={`${price}৳`} regularPrice="Cash Discount Price" option="Online / Cash Payment" />
                <Options price={"2,143৳/month"} regularPrice="Regular Price: 25,720৳" option="0% EMI for up to 12 Months***" />
            </div>
        </div>
    );
};

export default PaymentOptions;


const Options = ({ price, regularPrice, option }) => {



    return (
        <label className={`flex cursor-pointer border-2 border-solid hover:border-[#3749bb]`} >
            <div className="flex px-3 mr-3 bg-[#edf2f5]">
                <input
                    style={{ border: '1px solid red' }}
                    className="scale-[1.7]"
                    type="radio"
                    name="enable_emi"

                />
            </div>
            <div className="py-2">
                <span className="text-[22px] font-bold font-mono">{price}</span>
                <div className="font-medium">{regularPrice}</div>
                <small className="opacity-50 font-semibold text-xs">{option}</small>
            </div>
        </label>
    )
}