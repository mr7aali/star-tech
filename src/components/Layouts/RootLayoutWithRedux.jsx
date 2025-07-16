"use client";
import NavBar from "@/components/sheared/NavBar";
import Footer from "@/components/sheared/Footer";
import store from "@/redux/store";
import { Provider } from "react-redux";

const RootLayoutWithRedux = ({ children, user }) => {
  return (
    <Provider store={store}>
      <NavBar user={user} />
      {children}
      <Footer />
    </Provider>
  );
};

export default RootLayoutWithRedux;
