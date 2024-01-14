const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = action.payload
            console.log(state);
        }
    }
});


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;