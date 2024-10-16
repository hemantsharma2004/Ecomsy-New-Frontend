// purchasedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const purchasedSlice = createSlice({
    name: 'purchased',
    initialState: {
        purchasedItems: [],
    },
    reducers: {
        addPurchasedItems: (state, action) => {
            state.purchasedItems.push(...action.payload); // Add purchased items to the state
        },
        clearPurchasedItems: (state) => {
            state.purchasedItems = []; // Clear purchased items if needed
        },
    },
});

// Export the actions to use in components
export const { addPurchasedItems, clearPurchasedItems } = purchasedSlice.actions;
export default purchasedSlice.reducer;
