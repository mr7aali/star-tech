/* eslint-disable react/no-unescaped-entities */


const KeyFeatures = ({ data }) => {
   
    return (
        <div>
            <h2 className="text-[18px] sm:text-[22px] font-serif text-[#3749bb]">
                {/* MSI G2412 23.8" FHD 170Hz IPS 1ms FreeSync Premium Gaming Monitor */}
                {data?.name}
            </h2>

            <aside className="flex flex-wrap my-2">
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                    <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm">Price: <span className="font-semibold"> {data?.price} ৳</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                    <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm">Regular Price: <span className="font-semibold">{data?.price} ৳</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                    <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm">Status: <span className="font-semibold">{data.status}</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                    <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm">Product Code: <span className="font-semibold">{data.product_code}</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                    <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm">Brand: <span className="font-semibold">{data.brand}</span></p>
                </div>
            </aside>
            <div>
                <h3 className="text-[18px] font-semibold sm:text-[20px] font-serif my-4">Key Features</h3>

                <p className="my-1 text-[15px] sm:text-[16px] font-serif">Model: iGame GeForce RTX 4060 Ti Ultra W DUO OC 16GB-V</p>
                <p className="my-1 text-[15px] sm:text-[16px] font-serif">Core Clock: Base:1830Mhz; Boost:2460Mhz</p>
                <p className="my-1 text-[15px] sm:text-[16px] font-serif">Memory Clock: 17Gbps</p>
                <p className="my-1 text-[15px] sm:text-[16px] font-serif">Memory Interface: 128bit</p>
                <p className="my-1 text-[15px] sm:text-[16px] font-serif">Output: 3x DP+HDMI</p>

                {/* <a className="text-[#e5330b] cursor-pointer mt-4 font-serif underline underline-offset-2">View More Info</a> */}
                <a
                    className="text-[#e5330b] cursor-pointer mt-[10px] font-serif relative after:content-[''] after:block after:absolute after:w-full after:h-[2px] after:bg-[#e5330b] after:bottom-[-8px] after:transform after:origin-bottom-right after:scale-x-8 after:hover:scale-x-100"
                >
                    View More Info
                </a>

            </div>
        </div>
    );
};

export default KeyFeatures;