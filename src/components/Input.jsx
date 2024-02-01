import React from 'react';
import clsx from "clsx";

const Input = ({onChange, value, width, disabled}) => {
    return (
        <>
            <input
                disabled={disabled}
                onChange={onChange}
                value={value}
                className={clsx('py-2 px-4 border-gray-600 border-2 rounded-2xl text-gray-700 mt-6', width,
                    disabled ? 'bg-gray-500' : 'bg-white')}
            />
        </>
    );
};

export default Input;