import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
import { ShoppingCartOutlined } from "@ant-design/icons";

const RootLayouts = ({ children }) => {
    return (
        <div>
            <div className="fixed right-[50px] bottom-[50px]">
                <div className="flex flex-col items-center cursor-pointer rounded-lg  h-[65px] w-[65px] hover:bg-[#3749bb] bg-[#081621] shadow-md z-20">
                    <p className="text-[#fff] text-[25px]"><ShoppingCartOutlined /> </p>
                    <small className="text-[#fff] text-[12px] uppercase font-bold">Cart</small>
                    <div className="absolute top-[-7px] right-[-7px] text-red h-[25px] w-[25px] bg-[#ef4a23] rounded-full p-2 flex justify-center items-center"><span className="text-[12px] p-[2px] text-[#fff]">10</span>
                    </div>
                </div>
            </div>
            <NavBar />
            {children}
            {/* <h1>This is Footer</h1> */}
            <Footer />
        </div>
    );
};

export default RootLayouts;