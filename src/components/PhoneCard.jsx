import React from 'react';
import '../data/data.js'

const PhoneCard = ({props}) => {
    return (
        <div className='p-4 border-2 border-black bg-blue-300 w-80 h-800 flex-col'>
            <h1 className='font-bold text-center text-3xl mb-4'>{props.model}</h1>
            <p className='text-xl'>{props.description}</p>
            <div className='flex justify-between mt-10'>
                <p className='text-green-900'>{props.ratio}</p>
                <p>{props.price + "$"}</p>
            </div>
            <button
                className='p-2 m-4 flex justify-center border-2 border-black w-28 rounded font-bold text-blue-950'>BUY
            </button>
        </div>
    );
};

export default PhoneCard;