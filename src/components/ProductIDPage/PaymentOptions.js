import { useEffect, useState } from "react";


const PaymentOptions = ({ price }) => {
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);

    useEffect(() => {
        if (active1) {
            setActive2(false);
        }
        if (active2) {
            setActive1(false)
        }
    }, [active1, active2])

    return (
        <div>
            <h3 className="text-[20px] font-serif my-4">Payment Options</h3>
            <div className="grid lg:grid-cols-2 gap-3 font-serif">
                <div onClick={() => (setActive1(true))}>
                    <Options
                        active={active1}
                        price={`${price}৳`}
                        regularPrice="Cash Discount Price"
                        option="Online / Cash Payment"
                    />
                </div>
                <div onClick={() => (setActive2(true))}>
                    <Options
                        active={active2}
                        price={"2,143৳/month"}
                        regularPrice="Regular Price: 25,720৳"
                        option="0% EMI for up to 12 Months***" />
                </div>
            </div>
        </div>
    );
};

export default PaymentOptions;


const Options = ({
    price,
    regularPrice,
    option,
    active,
   

}) => {



    return (
        <label className={`${active ? "border-[#3749bb]" : ""} duration-100 flex cursor-pointer border-2 border-solid hover:border-[#3749bb]`} >
            <div className="flex px-3 mr-3 bg-[#edf2f5]">
                <input
                    className="scale-[1.7]"
                    type="radio"
                    name="enable_emi"
                    defaultChecked={active}
               


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