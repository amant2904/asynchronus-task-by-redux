import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: true,
    notification: false,
    notificationMsg1: "",
    notificationMsg2: "",
    notificationBg: ""
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        showNotification(state, action) {
            state.notification = true;
            state.notificationMsg1 = action.payload.msg1;
            state.notificationMsg2 = action.payload.msg2;
            state.notificationBg = action.payload.bg;
        },
        hideNotification(state) {
            state.notification = false;
            state.notificationMsg1 = "";
            state.notificationMsg2 = "";
            state.notificationBg = "";
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;