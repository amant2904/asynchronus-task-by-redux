import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem: [],
    itemQuantity: 0
}

const cartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItem.find((item) => {
                return item.id === action.payload.id;
            })
            if (!existingItem) {
                state.cartItem = [...state.cartItem, action.payload];
            }
            else {
                existingItem.quantity += 1;
            }
            state.itemQuantity += 1;
        },
        removeFromCart(state, action) {
            const existingItem = state.cartItem.findIndex((item) => {
                return item.id === action.payload.id;
            })
            if (state.cartItem[existingItem].quantity > 1) {
                state.cartItem[existingItem].quantity -= 1;
            }
            else {
                state.cartItem.splice(existingItem, 1);
            }
            state.itemQuantity -= 1;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;