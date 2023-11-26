import dynamic from "next/dynamic";
import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
// import CardSIdeBar from "../ui/CardSIdeBar";
const CardSIdeBar = dynamic(() => import('../ui/CardSIdeBar'), { ssr: false });
const RootLayouts = ({ children }) => {


  






    return (
        <div>
            <CardSIdeBar />
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayouts;