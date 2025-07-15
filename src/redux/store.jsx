const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./features/cart/cartSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import { baseApi } from "./api/baseApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
