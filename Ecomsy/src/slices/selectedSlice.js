import { createSlice } from '@reduxjs/toolkit';

export const selectedSlice = createSlice({
    name: "selected",
    initialState: {
        selectedItems: [],
        isAdded: false,
    },
    reducers: {
        add: (state, value) => {
            state.selectedItems.push(value.payload);
        },
        remove: (state, value) => {
            let index = state.selectedItems.indexOf(value.payload);
            if (index > -1) {
                state.selectedItems.splice(index, 1);
            }
        },
        removeAll: (state) => {
            state.selectedItems = [];
        },
        removeAllFromCart: (state) => {
            state.selectedItems = []; // Clear all items from the cart
        },
        decreaseQuantity: (state, action) => {
            // Find the product based on id and decrease its quantity
            const productId = action.payload;
            const product = state.selectedItems.find(item => item.id === productId);
            if (product && product.quantity > 0) {
                product.quantity -= 1; // Decrease the quantity
            }
        },
    },
});

export const { add, remove, removeAll,removeAllFromCart, decreaseQuantity } = selectedSlice.actions;
export default selectedSlice.reducer;
