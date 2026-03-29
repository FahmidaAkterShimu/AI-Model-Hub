import React, { useState } from 'react';

const ModelCard = ({ model }) => {
    const [isSubscribed, setIsSubscribed] = useState(false)

    return (
        <div className='shadow-lg rounded-3xl overflow-hidden border border-zinc-300 space-y-8'>
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
                    onClick={() => setIsSubscribed(true)}
                    className='btn border-none w-full py-8 bg-red-600 hover:bg-red-500 rounded-[18px] font-semibold text-lg shadow-xl shadow-red-500/30 text-white'>
                    {isSubscribed ? "Subscribed" : "Subscribe Now"}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;