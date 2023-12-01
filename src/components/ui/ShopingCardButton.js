import { ShoppingCartOutlined } from "@ant-design/icons";

const ShopingCardButton = () => {
    return (
        <div className="fixed right-10 bottom-10 md:right-[40px] md:bottom-[40px] xl:right-[50px] xl:bottom-[50px] z-30">
            <div style={{ border: "1px solid rgba(255,255,255,.2)" }} className="flex flex-col items-center cursor-pointer rounded-md h-[60px] w-[60px] md:h-[65px] md:w-[65px] hover:bg-[#3749bb] bg-[#081621] shadow-md z-20">
                <p className="text-[#fff] text-[25px]"><ShoppingCartOutlined /> </p>
                <small className="text-[#fff] text-[10px] md:text-[12px] uppercase font-bold">Cart</small>
                <div className="absolute top-[-7px] right-[-7px] text-red h-[25px] w-[25px] bg-[#ef4a23] rounded-full p-2 flex justify-center items-center"><span className="text-[12px] p-[2px] text-[#fff]">10</span>
                </div>
            </div>
        </div>
    );
};

export default ShopingCardButton;