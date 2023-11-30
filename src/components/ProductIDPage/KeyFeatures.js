/* eslint-disable react/no-unescaped-entities */


const KeyFeatures = () => {
    return (
        <>
            <h2 className="text-[22px] font-serif text-[#3749bb]">MSI G2412 23.8" FHD 170Hz IPS 1ms FreeSync Premium Gaming Monitor</h2>

            <aside className="flex my-2">
                <div className="bg-[rgba(55,73,187,.05)] rounded-full mr-2">
                    <p className="px-5 py-1 text-sm">Price: <span className="font-semibold">23,800৳</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] rounded-full mr-2">
                    <p className="px-5 py-1 text-sm">Regular Price: <span className="font-semibold">23,800৳</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] rounded-full mr-2">
                    <p className="px-5 py-1 text-sm">Status: <span className="font-semibold">In Stock</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] rounded-full mr-2">
                    <p className="px-5 py-1 text-sm">Product Code: <span className="font-semibold">26275</span></p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] rounded-full mr-2">
                    <p className="px-5 py-1 text-sm">Brand: <span className="font-semibold">MSI</span></p>
                </div>
            </aside>
            <div>
                <h3 className="text-[20px] font-serif my-4">Key Features</h3>

                <p className="my-1 font-serif">Model: iGame GeForce RTX 4060 Ti Ultra W DUO OC 16GB-V</p>
                <p className="my-1 font-serif">Core Clock: Base:1830Mhz; Boost:2460Mhz</p>
                <p className="my-1 font-serif">Memory Clock: 17Gbps</p>
                <p className="my-1 font-serif">Memory Interface: 128bit</p>
                <p className="my-1 font-serif">Output: 3x DP+HDMI</p>

                {/* <a className="text-[#e5330b] cursor-pointer mt-4 font-serif underline underline-offset-2">View More Info</a> */}
                <a
                    className="text-[#e5330b] cursor-pointer mt-[10px] font-serif relative after:content-[''] after:block after:absolute after:w-full after:h-[2px] after:bg-[#e5330b] after:bottom-[-8px] after:transform after:origin-bottom-right after:scale-x-8 after:hover:scale-x-100"
                >
                    View More Info
                </a>

            </div>
        </>
    );
};

export default KeyFeatures;