import { useEffect, useState } from "react";
import { MdCreditCard, MdAccountBalance } from "react-icons/md";

const PaymentOptions = ({ price }) => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  useEffect(() => {
    if (active1) setActive2(false);
    if (active2) setActive1(false);
  }, [active1, active2]);

  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
      <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
        <span className="mr-3 w-2 h-8 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></span>
        Payment Options
      </h3>
      <div className="grid gap-4 lg:grid-cols-2">
        <div onClick={() => setActive1(true)}>
          <Options
            active={active1}
            price={`${price}৳`}
            regularPrice="Cash Discount Price"
            option="Online / Cash Payment"
            icon={<MdCreditCard className="w-6 h-6" />}
          />
        </div>
        <div onClick={() => setActive2(true)}>
          <Options
            active={active2}
            price={"2,143৳/month"}
            regularPrice="Regular Price: 25,720৳"
            option="0% EMI for up to 12 Months***"
            icon={<MdAccountBalance className="w-6 h-6" />}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;

const Options = ({ price, regularPrice, option, active, icon }) => {
  return (
    <label
      className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-200 cursor-pointer shadow-sm bg-white
        ${
          active
            ? "border-blue-600 ring-2 ring-blue-100 shadow-lg"
            : "border-gray-200 hover:border-blue-300"
        }
      `}
      style={{ minHeight: 120 }}
    >
      {/* Radio Button */}
      <div className="flex justify-center items-center">
        <input
          className="w-5 h-5 accent-blue-600"
          type="radio"
          name="enable_emi"
          checked={active}
          readOnly
        />
      </div>
      {/* Icon */}
      <div className={`text-2xl ${active ? "text-blue-600" : "text-gray-400"}`}>
        {icon}
      </div>
      {/* Content */}
      <div className="flex-1">
        <div
          className={`text-xl font-bold ${
            active ? "text-blue-700" : "text-gray-800"
          }`}
        >
          {price}
        </div>
        <div
          className={`font-medium ${
            active ? "text-blue-500" : "text-gray-500"
          }`}
        >
          {regularPrice}
        </div>
        <div
          className={`text-sm font-semibold ${
            active ? "text-blue-500" : "text-gray-500"
          }`}
        >
          {option}
        </div>
      </div>
    </label>
  );
};
