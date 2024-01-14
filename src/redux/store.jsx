const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "@/redux/features/counter/counterSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer
    },
});


export default store;