import React from 'react';

const Input = ({onChange, value}) => {
    return (
        <>
            <input
                onChange={onChange}
                value={value}
                className='py-2 px-4 border-gray-600 border-2 rounded-2xl text-gray-700 w-[100%] mt-6'
            />
        </>
    );
};

export default Input;