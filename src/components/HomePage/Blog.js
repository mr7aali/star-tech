/* eslint-disable react/no-unescaped-entities */
import { HomePageBlogData } from "@/constant/data";
import Link from "next/link";

const Blog = () => {
    return (
        <div className='font-serif max-w-[1290px] mx-auto  px-2 mb-3'>

            <div>
                <h1 className='mb-5 mt-5 text-xl font-semibold'>Best Laptop Shop in Bangladesh
                </h1>
                <p className='text-[#01132d]'>Star Tech is the most popular <Link href={"/"} className='hover:underline text-[#ef4a23]'>Laptop Brand Shop in BD.</Link> Star Tech <Link href={"/"} className='hover:underline text-[#ef4a23]'>Laptop</Link> Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of <Link href={"/"} className='hover:underline text-[#ef4a23]'>Gaming Laptops</Link> because we always bring the latest laptops in Bangladesh. As the best laptop shop in BD, a customer’s budget is our first concern. We bring the latest Intel Laptop and AMD Laptop under budget for every customer - from starters to expert users. Star Tech is considered the most trusted laptop shop in BD, allowing you to buy the best laptops from top laptop brands in the world. Along with the best laptop brands, our experts provide you with the best buying decisions based on your needs and budget - making Star Tech the most trusted laptop shop in Bangladesh. Star Tech lets you buy an official Apple <Link href={"/"} className='hover:underline text-[#ef4a23]'>MacBook</Link> Air or MacBook Pro from <Link href={"/"} className='hover:underline text-[#ef4a23]'>Apple Store in Bangladesh</Link> . Star Tech sells the latest models of the most popular laptop brands, such as - Razer, HP, Dell, Apple MacBook, Asus, Acer, Lenovo, Microsoft Surface, MSI, Gigabyte, i-Life, <Link href={"/"} className='hover:underline text-[#ef4a23]'>Walton</Link> , Xiaomi MI, Huawei, Chuwi, etc.</p>
                <Link href={"/"} className='hover:underline text-[#ef4a23]'></Link>
            </div>
            <div>
                <h1 className='mb-5 mt-5 text-xl font-semibold'>Best Desktop PC Shop In Bangladesh</h1>
                <p className='text-[#01132d]'><Link href={"/"} className='hover:underline text-[#ef4a23]'>Star Tech</Link> has the most comprehensive array of <Link href={"/"} className='hover:underline text-[#ef4a23]'>Desktop PCs</Link>. We offer top-of-the-line Custom PC, <Link href={"/"} className='hover:underline text-[#ef4a23]'>Brand PC</Link>, All-in-One PC, and <Link href={"/"} className='hover:underline text-[#ef4a23]'>Portable Mini PC</Link> at Star Tech outlets, the best Desktop PC shop in Bangladesh, which are spread nationwide. Get your new iMac Desktop or Apple Mac Mini with an international warranty and servicing plan. You can always depend on the Star Tech PC shop experts to build the best desktop PC or computer with parts of your choice. Star Tech is Bangladesh's most reliable repair shop for PC, laptops, & other consumer electronics. Take your gaming or professional content creation to the next level with a large collection of high-end Gaming PC and Editing PC from Star Tech. You can build a complete personal computer with the best desktop PC parts picked by you with our <Link href={"/"} className='hover:underline text-[#ef4a23]'>PC Builder</Link> feature. The features let you <Link href={"/"} className='hover:underline text-[#ef4a23]'>pick PC parts</Link> to buy the best desktop PC anytime. Or, you can visit any Star Tech custom PC shop near you to build the best Desktop PC according to your taste, live, and in front of you.</p>
                <Link href={"/"} className='hover:underline text-[#ef4a23]'></Link>
            </div>

            {/* {
                HomePageBlogData.map((Item, i) => (
                    <div key={i}>
                        <h1 className='mb-5 mt-5 text-xl font-semibold'>{Item.title}</h1>
                        <p className='text-[#01132d]'>{String(Item.details)}</p>
                        <Link href={"/"} className='hover:underline text-[#ef4a23]'></Link>
                    </div>
                ))
            } */}

        </div>
    );
};

export default Blog;