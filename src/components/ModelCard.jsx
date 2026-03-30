import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = () => {
        setIsSubscribed(true);

        const isFound = carts.find(item => item.id === model.id);
        if (isFound) {
            toast.error("Item already in cart!");
            return;
        };

        setCarts([...carts, model])
        toast.success("Item added to cart!");
    }

    return (
        <div className='shadow-lg rounded-3xl overflow-hidden border border-zinc-300 space-y-6'>
            <div className='flex justify-center items-center bg-[#E4E4E7] h-56'>
                <img className='h-40 w-40 object-contain' src={model.image} alt="" />
            </div>
            <div className='px-6'>
                <h2 className='text-2xl font-bold mb-4'>{model.title}</h2>
                <p className='text-[#919198]'>{model.description}</p>
            </div>
            <div className='px-6'>
                <p><span className='text-3xl font-bold'>${model.price}</span> /month</p>
            </div>

            <div className='px-6 mb-6'>
                <button
                    onClick={handleSubscription}
                    className='btn border-none w-full py-7.5 bg-red-600 hover:bg-red-500 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/20 text-white'>
                    {isSubscribed ? "Subscribed" : "Subscribe Now"}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;