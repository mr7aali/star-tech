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
        },
        removeFromCart: (state, action) => {
            const isExist = state.cart.find(c => c.id === action.payload.id);
            if (isExist.quantity > 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                isExist.quantity -= 1;
                state.cart.push(isExist);
            }
            else {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
        }
    }
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;