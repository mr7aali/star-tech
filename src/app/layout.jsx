import { verifyUser } from "@/lib/auth";
import "./globals.css";

import RootLayoutWithRedux from "@/components/Layouts/RootLayoutWithRedux";
// import store from "@/redux/store";

// import { Provider, useDispatch, useSelector } from "react-redux";
const RootLayouts = async ({ children }) => {
  const user = await verifyUser();

  return (
    <html>
      <body>
        <RootLayoutWithRedux user={user}>{children}</RootLayoutWithRedux>
      </body>
    </html>
  );
};

export default RootLayouts;
