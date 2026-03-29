import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise);
    console.log(models);



    return (
        <div className='py-20 max-w-[1230px] mx-auto'>
            <div className='text-center mb-16'>
                <h1 className='text-5xl font-bold mb-4'>Choose Your AI Model</h1>
                <p className='text-xl text-gray-400'>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {models.map((model) => (
                    <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelCard>
                ))}
            </div>

        </div>
    );
};

export default Models;