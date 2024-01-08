import { FaDeleteLeft } from "react-icons/fa6";
const ShoppingCardModal = ({ modelOpen, setModelOpen }) => {
    return (
        <div
            className={`fixed z-[254546546]  top-0 left-0 w-full h-full grid place-items-center bg-[rgba(0,0,0,.75)] transition-opacity duration-300 ${modelOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="max-w-[800px] p-5 mx-auto bg-white grid grid-cols-12 rounded-sm relative">

                <span onClick={() => setModelOpen(false)} className="absolute top-0 right-0 text-2xl px-2 py-2 text-[#888] cursor-pointer"><FaDeleteLeft /></span>

                <div className="col-span-9">

                    <div>
                        <p className="mt-5 mb-6">
                            {/* <span className="inline-block text-xl "><MdOutlineDone/></span> */}
                            You have added <span className="text-[#ef4a23]">MSI G244F E2 23.8 inch FHD Rapid IPS 180Hz Gaming Monitor to your shopping</span> cart!</p>
                        <div className="gap-3 flex">
                            <button className="btn">View Cart</button>
                            <button className="btn st-outline">Confirm Order</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 mt-3">
                    <div style={{ border: "1px solid #eee" }} className="rounded">
                        <p style={{ borderBottom: "1px solid #eee" }} className="flex justify-between mx-3 py-2">
                            <span className="text-[#888]">Cart quantity:</span>
                            <span className="font-bold">1</span>
                        </p>
                        <p className="flex justify-between mx-3 py-2">
                            <span className="text-[#888]">Cart Total:</span>
                            <span className="font-bold">25800</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCardModal;