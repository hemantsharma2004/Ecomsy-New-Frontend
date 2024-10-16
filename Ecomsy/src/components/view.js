import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai'; // Importing the icon

const View = () => {
    const purchasedItems = useSelector((state) => state.purchased.purchasedItems);
    const [trackingIndex, setTrackingIndex] = useState(null); // Track which item is being tracked

    const handleTrackClick = (index) => {
        // Toggle the tracking for the clicked product
        setTrackingIndex(trackingIndex === index ? null : index);
    };

    return (
        <div className='flex w-9/12 mx-auto mt-[6rem]'>
            <div className='flex flex-col gap-[2rem] justify-center items-center w-full'>
                <h2 className='text-[2rem] text-zinc-800 font-bold'>Your Purchased Items</h2>

                {purchasedItems.length === 0 ? (
                    <p>No items purchased yet.</p>
                ) : (
                    purchasedItems.map((product, index) => (
                        <div key={index} className='flex w-[600px] gap-[4rem] max-h-[500px] border-b-[2.5px] pb-6 px-[0.5rem] border-b-zinc-500 mb-[2rem]'>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                width='160rem' 
                                className='min-h-[10rem] object-contain' 
                            />
                            <div className='flex flex-col justify-between items-center gap-[2rem] mt-[1rem]'>
                                <div className='text-[1.2rem] font-semibold text-zinc-700'>{product.title}</div>
                                <div className='text-zinc-500'>{product.description}</div>
                                <div className='flex w-full justify-between items-center px-[1rem]'>
                                    <div className='text-green-600 font-semibold text-xl'>$ {product.price}</div>
                                    <button 
                                        onClick={() => handleTrackClick(index)}
                                        className='text-blue-500 underline text-sm font-semibold'>
                                        TRACK
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Tracking Info Sidebar */}
            {trackingIndex !== null && (
                <div className='flex flex-col justify-start items-start w-[300px] p-6 bg-gray-100 shadow-lg border-l border-gray-300'>
                    <h3 className='text-[1.5rem] font-bold text-gray-700 mb-4'>
                        Tracking for: {purchasedItems[trackingIndex].title}
                    </h3>

                    {/* Tracking steps with round balls */}
                    <div className='flex flex-col gap-[2rem]'>
                        <div className='flex items-center'>
                            <div className='w-[24px] h-[24px] rounded-full bg-green-500'></div>
                            <p className='ml-4 text-gray-600 text-[1.1rem]'>Start</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-[24px] h-[24px] rounded-full bg-yellow-500'></div>
                            <p className='ml-4 text-gray-600 text-[1.1rem]'>Mid</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-[24px] h-[24px] rounded-full bg-red-500'></div>
                            <p className='ml-4 text-gray-600 text-[1.1rem]'>End</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default View;
