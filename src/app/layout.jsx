"use client";
import "./globals.css";

import RootLayoutWithRedux from "@/components/Layouts/RootLayoutWithRedux";
import store from "@/redux/store";

import { Provider, useDispatch, useSelector } from "react-redux";
const RootLayouts = ({ children }) => {
  return (
    <html>
      <body>
        <Provider store={store}>
          <RootLayoutWithRedux>{children}</RootLayoutWithRedux>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayouts;
