import Product from './Product';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productData from '../components/productData'; // Adjust the path as needed
import toast from 'react-hot-toast';
import { setProducts, updateProductQuantity } from '../slices/productSlice';


const Home = ({ setContent }) => {
    const items = useSelector((state) => state.selected.selectedItems); // Items in the cart
    const products = useSelector((state) => state.products.products); // Select products from the Redux store
    const dispatch = useDispatch();

    useEffect(() => {
        // Initialize the products in the Redux store if not already set
        if (products.length === 0) {
            const updatedProducts = productData.map(product => ({ ...product }));
            dispatch(setProducts(updatedProducts)); // Set products in the Redux store
            setContent(updatedProducts); // Optionally set local content if needed
        }
    }, [dispatch, setContent, products]);

    const handleAddToCart = (productId) => {
        dispatch({ type: 'ADD_TO_CART', payload: productId });
        toast.success("Added to Cart!");
    };

    const handleRemoveFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
        toast.error("Removed from Cart!");
    };

    const handleCheckout = () => {
        // Update each product's quantity based on the items in the cart
        items.forEach(productId => {
            // Dispatch action to update the product quantity in the store
            dispatch(updateProductQuantity({ productId }));
        });

        dispatch({ type: 'REMOVE_ALL_FROM_CART' }); // Clear the cart
        toast.success("Checkout successful! Your items have been purchased.");
    };

    return (
        <div className="flex wrap flex-col mt-[6rem] w-10/12 mx-auto justify-between items-center">
            <div className='flex gap-[1.25rem] flex-wrap mx-auto justify-center mt-[2rem] pb-8 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                {
                    products.map((product) => ( // Use Redux state for rendering
                        <Product
                            product={product}
                            key={product.id}
                            taken={items.indexOf(product.id) > -1}
                            quantity={product.quantity}
                            onAddToCart={() => handleAddToCart(product.id)}
                            onRemoveFromCart={() => handleRemoveFromCart(product.id)}
                        />
                    ))
                }
            </div>
           
        </div>
    );
}

export default Home;
