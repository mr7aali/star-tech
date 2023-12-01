import Image from "next/image";
import Link from "next/link";
import { LuCopyPlus } from "react-icons/lu";

const RelatedProductCard = () => {
    return (

        <div className="flex py-3" style={{ borderTop: '1px solid #ecedef' }}>
            <div >
                <Image
                    width={90}
                    height={90}
                    src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g2412/g2412-06-500x500.webp"
                    alt="" srcset="" />
            </div>
            <div className="pl-5">
                <Link href={"/product/id"} className="font-serif text-[#111] hover:text-[#ef4a23] text-[15px]  hover:underline cursor-pointer">ACER EK220Q H3bi 21.5 inch 1ms 100hz Borderless Full HD Monitor</Link>
                {/* <h3>Asus VA249HE 23.8 inch Full HD Eye Care Monitor</h3> */}
                <p className="my-2 text-[#ef4a23] text-[18px] font-bold font-mono">19,900 ৳</p>
                <p className="flex items-center opacity-50 cursor-pointer hover:opacity-100">
                    <LuCopyPlus />
                    <small className="ml-2">Add to Compare</small>
                </p>
            </div>
        </div>
    );
};

export default RelatedProductCard;