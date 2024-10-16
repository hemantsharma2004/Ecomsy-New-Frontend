import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { add, remove } from '../slices/selectedSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FcApproval } from 'react-icons/fc';

const Product = ({ product, taken, quantity, onAddToCart, onRemoveFromCart }) => {
    const items = useSelector((state) => state.selected.selectedItems);
    const dispatch = useDispatch();
    const desc = product.description.substring(0, 80) + "...";
    const title = product.title.substring(0, 14) + "...";

    function handleClick(id) {
        let index = items.indexOf(id);

        if (index <= -1) {
            toast.success("Added to Cart!");
            dispatch(add(parseInt(id)));
            onAddToCart(id); // Call onAddToCart to signal adding to cart
        } else {
            toast.error("Removed from Cart!");
            dispatch(remove(parseInt(id)));
            onRemoveFromCart(id); // Call to signal removing from cart
        }
    }

    return (
        <div className="relative flex flex-col w-[23%] justify-between gap-4 items-center product rounded-2xl p-4 duration-300 group hover:scale-110 mb-[2rem]">
            {taken && 
                <FcApproval className='text-[3.5rem] absolute -top-4 -left-4 text-green-600' />}
            {/* Out of Stock Overlay */}
            {quantity === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                    <img src="https://i.postimg.cc/fyXnvPsd/out-of-stock-icon-1.png" alt="Out of Stock" className="h-40 w-40 object-contain" />
                </div>
            )}
            <div className='text-xl font-semibold text-zinc-700'>{title}</div>
            <div className='text-white bg-green-600 font-semibold  p-2 rounded-xl shadow-2xl'> Quantity: {quantity}</div>
            <div className='text-center text-xs text-zinc-500'>{desc}</div>
            <div>
                <img src={product.image} width='140rem' className='min-h-[10rem] object-contain' />
            </div>
            <div className='flex w-full justify-between items-center px-2'>
                <div className='text-green-600 font-semibold'>$ {product.price}</div>
                
                {taken ? (
                    <button 
                        onClick={() => handleClick(product.id)} 
                        className='text-zinc-700 uppercase text-sm font-semibold p-[0.5rem] border-[2px] rounded-full border-zinc-700 py-[0.25rem] group-hover:bg-zinc-700 group-hover:text-white'
                    >
                        Remove Item
                    </button>
                ) : (quantity > 0 && (
                    <button 
                        onClick={() => handleClick(product.id)} 
                        className='text-zinc-700 uppercase text-sm font-semibold p-[0.5rem] border-[2px] rounded-full border-zinc-700 py-[0.25rem] duration-300 group-hover:bg-zinc-700 group-hover:text-white'
                    >
                        Add to Cart
                    </button>
                ))}
            </div>
            <Toaster /> {/* Toast notifications */}
        </div>
    );
}

export default Product;
