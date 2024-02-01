import React from 'react';
import clsx from "clsx";

const MainBtn = ({text, onClick, width, disabled}) => {
    return (
        <button
            className={clsx('flex justify-center items-center py-2 px-4  border-2 border-white bg-blue-300 text-cyan-950 rounded-2xl', width, disabled ? 'bg-gray-700' : 'bg-blue-300')
            }
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default MainBtn;