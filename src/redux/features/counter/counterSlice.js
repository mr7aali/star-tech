const { createSlice } = require("@reduxjs/toolkit");

const initial = {
    count: 0
}

const counterSlice = createSlice({
    initialState: initial,
    name: "counterSlice",
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer