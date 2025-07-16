"use client";
import NavBar from "@/components/sheared/NavBar";
import Footer from "@/components/sheared/Footer";
import store from "@/redux/store";
import { Provider } from "react-redux";

const RootLayoutWithRedux = ({ children }) => {
  return (
    <Provider store={store}>
      <NavBar user={false} />
      {children}
      <Footer />
    </Provider>
  );
};

export default RootLayoutWithRedux;
