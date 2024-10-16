import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import { updateProductQuantity } from '../slices/productSlice';
import { removeAllFromCart } from '../slices/selectedSlice'; // Import the clear cart action
import toast from 'react-hot-toast';
import { addPurchasedItems } from '../slices/purchasedView';

const Cart = ({ content }) => {
    const items = useSelector((state) => state.selected.selectedItems);
    const dispatch = useDispatch();
    let value = 0;

    let selectedItems = [];
    for (let i = 0; i < content.length; i++) {
        let index = items.indexOf(content[i].id);
        if (index > -1) {
            selectedItems.push(content[i]);
            value += content[i].price;
        }
    }

    const handleCheckout = () => {
        const purchasedItems = [];
        items.forEach(productId => {
            const purchasedItem = content.find(item => item.id === productId);
            if (purchasedItem) {
                purchasedItems.push(purchasedItem); // Collect purchased items
            }
            dispatch(updateProductQuantity({ productId })); // Update product quantity
        });

        dispatch(addPurchasedItems(purchasedItems)); // Dispatch action to add purchased items
        dispatch(removeAllFromCart()); // Clear the cart
        toast.success("Checkout successful! Your items have been purchased.");
    };

    return (
        <div className='flex flex-row justify-between items-stretch w-9/12 mx-auto mt-[6rem]'>
            {selectedItems.length === 0 && (
                <div className='m-4 flex flex-col gap-[2rem] justify-center items-center w-screen h-[70vh]'>
                    <div className='text-3xl text-zinc-800'>Your Cart is Empty!</div>
                    <span className='py-[0.5rem] px-[1rem] rounded-md text-xl duration-500 border-[2px] border-green-600 hover:text-green-600 hover:bg-white bg-green-600 text-white'>
                        <NavLink to='/'>Shop Now</NavLink>
                    </span>
                </div>
            )}

            {selectedItems.length !== 0 && (
                <div className='w-screen flex justify-between gap-8 items-center'>
                    <div className='flex gap-[0.5rem] flex-col'>
                        {selectedItems.map((product, key) => (
                            <CartItem product={product} key={key} taken={items.indexOf(product.id) > -1} />
                        ))}
                    </div>

                    <div className='h-full flex flex-col justify-between mt-0 py-[4rem] w-[120%]'>
                        <div className='flex gap-[1rem] flex-col'>
                            <div className='text-2xl text-green-800 font-semibold'>YOUR CART</div>
                            <div className='text-[3rem] text-green-700 -mt-[2rem] font-bold'>SUMMARY</div>
                            <div className='text-xl font-bold text-zinc-700'>
                                <span className='text-xl text-zinc-700 font-semibold'>Total Items:</span> {selectedItems.length}
                            </div>
                        </div>

                        <div className='flex flex-col gap-[1rem]'>
                            <div className='text-xl text-zinc-700 font-semibold'>
                                Total Amount: <span className='text-xl font-bold text-black'>$ {value.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={handleCheckout} 
                                className='mt-4 p-3 bg-green-600 text-white rounded-md hover:bg-green-700'
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
