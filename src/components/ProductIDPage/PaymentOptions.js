

const PaymentOptions = () => {
    return (
        <div>
            <h3 className="text-[20px] font-serif my-4">Payment Options</h3>
            <div className="grid grid-cols-2 gap-3 font-serif" >
                <label className="flex" style={{ border: '2px solid #edf2f5' }}>
                    <div className="flex px-3 mr-3 bg-[#edf2f5]">
                        <input style={{ border: '1px solid red' }} checked className="scale-[1.7]" type="radio" name="enable_emi" value="1" />
                    </div>
                    <div className="py-2 ">
                        <span className="text-[22px] font-bold font-mono">23,800৳</span>
                        <div className="font-medium">Cash Discount Price</div>
                        <small className="opacity-50 font-semibold text-xs">Online / Cash Payment</small>
                    </div>
                </label>
                <label className="flex" style={{ border: '2px solid #edf2f5' }}>
                    <div className="flex px-3 mr-3 bg-[#edf2f5]">
                        <input style={{ border: '1px solid red' }} className="scale-[1.7]" type="radio" name="enable_emi" value="1" />
                    </div>
                    <div className="py-2">
                        <span className="text-[22px] font-bold font-mono">2,143৳/month</span>
                        <div className="font-medium">Regular Price: 25,720৳</div>
                        <small className="opacity-50 font-semibold text-xs">0% EMI for up to 12 Months***</small>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default PaymentOptions;