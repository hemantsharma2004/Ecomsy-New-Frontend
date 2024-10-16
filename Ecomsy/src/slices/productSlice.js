import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        updateProductQuantity: (state, action) => {
            const { productId } = action.payload;
            const product = state.products.find(product => product.id === productId);
            if (product && product.quantity > 0) {
                product.quantity -= 1; 
            }
        },
    },
});

// Export the actions to use in components
export const { setProducts, updateProductQuantity } = productsSlice.actions;
export default productsSlice.reducer;
