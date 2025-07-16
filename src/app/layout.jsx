// import { verifyUser } from "@/lib/auth";
import "./globals.css";
// import { verifyUser } from "@/app/actions";
import RootLayoutWithRedux from "@/components/Layouts/RootLayoutWithRedux";
// import store from "@/redux/store";

// import { Provider, useDispatch, useSelector } from "react-redux";
const RootLayouts = async ({ children }) => {
  // const user = await verifyUser();

  return (
    <html>
      <body>
        <RootLayoutWithRedux>{children}</RootLayoutWithRedux>
      </body>
    </html>
  );
};

export default RootLayouts;
