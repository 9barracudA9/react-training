import React from 'react';

const GreetPage = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-[55px] font-bold text-white'
            >
                Welcome to barracudA`s workspace
            </h1>
            <img className='w-[40%] h-[30%]' src={require('./React-logo.webp_.png')} alt="??"/>

        </div>
    );
};

export default GreetPage;