import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showCart: true,
    cartItem: [],
    itemQuantity: 0
}

const cartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        addInCart(state, action) {
            state.cartItem = [...state.cartItem, action.payload];
            state.itemQuantity += 1;
        },
        updateInCart(state, action) {
            state.cartItem = action.payload;
            state.itemQuantity += 1;
        },
        reduceInCart(state, action) {
            state.cartItem = action.payload;
            state.itemQuantity -= 1;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;