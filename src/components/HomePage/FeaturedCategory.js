import Image from "next/image";


const FeaturedCategory = () => {
    const items = [
        { title: "Drone", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png" },
        { title: "Gimbal", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png" },
        { title: "Battery", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-battery-01-48x48.png" },
        { title: "TV", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png" },
        { title: "Mobile Phone", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png" },
        { title: "Power Station", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/powerstation-48x48.png" },
        { title: "VR", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/vr-48x48.png" },
        { title: "Smart Watch", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png" },
        { title: "Action Camera", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/action-camera-48x48.png" },
        { title: "Graphics Card", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png" },
        { title: "Printer", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-48x48.png" },
        { title: "Headphone", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png" },
        { title: "Earbuds", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/earbuds-48x48.png" },
        { title: "Bluetooth", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/bt-speaker-48x48.png" },
        { title: "CC Camera", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/cc-camera-48x48.png" },
        { title: "Gaming Console", Image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png" },
    ]
    return (
        <div className="max-w-[1300px] mx-auto">
            <div className="mt-12">
                <h3 className="text-center text-[26px] md:text-[30px] font-bold font-serif">Featured Category</h3>
                <p className="text-center text-[#01132d] mt-2 mb-3 text-[15px] md:text-[18px] opacity-90 font-serif">Get Your Desired Product from Featured Category!</p>
            </div>




            <div  className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-10 mx-3">
                {
                    items.map(item => (
                        <div  key={item} className="bg-white rounded-xl shadow-md cursor-pointer">
                            <a
                                // style={{border:'1px solid red'}}
                                // href="https://www.startech.com.bd/gimbal"
                                className="flex gap-5 justify-center items-center flex-col xl:py-5 py-3"
                            >
                                <span >
                                    <Image src={item.Image} alt="Gimbal" width="48" height="48" />
                                </span>
                                <p  className="mt-1 xl:mt-2 text-[11px] sm:text-[12px] xl:text-[15px] px-1">{item.title}</p>
                            </a>
                        </div>
                    ))
                }

            </div>





        </div>
    );
};

export default FeaturedCategory;