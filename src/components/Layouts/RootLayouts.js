import NavBar from "../sheared/NavBar";

const RootLayouts = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            {/* <h1>This is Footer</h1> */}
        </div>
    );
};

export default RootLayouts;