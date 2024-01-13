const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
});

export default cartSlice.reducer;