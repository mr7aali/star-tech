const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.cart.length === 0) {
                state.cart.push(action.payload);
            }
            else if (state.cart.length > 0) {
                const needToquantityChange = state.cart.find((item) => item.id === action.payload.id);

                if (needToquantityChange) {
                    state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                    needToquantityChange.quantity += action.payload.quantity;
                    state.cart.push(needToquantityChange);
                }
                else {
                    state.cart.push(action.payload)
                }

            }
            // const getPreviousDataArray = getCartDataToLocalStorage(KeyCartData).cart;
            // if (getPreviousDataArray.length > 0) {
            //     const needToquantityChange = getPreviousDataArray.find((item) => item.id === productData.id);
            //     if (needToquantityChange) {
            //         const NotneedToquantityChange = getPreviousDataArray.filter((item) => item.id !== productData.id);
            //         console.log(NotneedToquantityChange);
            //         needToquantityChange.quantity += count;
            //         NotneedToquantityChange.push(needToquantityChange);
            //         setCartDataToLocalStorage(KeyCartData, { cart: NotneedToquantityChange })

            //     }
            //     else {
            //         getPreviousDataArray.push(productData);
            //         setCartDataToLocalStorage(KeyCartData, { cart: getPreviousDataArray })
            //     }

            // }
            // else if (getPreviousDataArray.length === 0) {
            //     setCartDataToLocalStorage(KeyCartData, { cart: [productData] })
            // }
        }




    }
});


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;