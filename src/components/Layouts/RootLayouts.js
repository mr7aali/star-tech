import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";
import CardSIdeBar from "../ui/CardSIdeBar";

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