import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ data }) => {

    return (
        <div style={{ border: "1px solid #e5e7eb" }} className="max-w-sm rounded overflow-hidden shadow-lg relative">
            <Image
                className="mx-auto"
                //src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-500x500.webp"
                src={data.image}
                width={220}
                height={4}
                alt=""
            />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.productName}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.category}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <div className="flex items-center justify-center">
                        <p className="mr-1"> {data.averageRating} </p>  <AiFillStar />
                    </div>
                </span>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.price} $</span>
            </div>
            <span className="inline-block absolute top-1 right-0 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.status}</span>
        </div>

    );
};

export default ProductCard;