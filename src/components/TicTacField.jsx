import React from 'react';
import clsx from "clsx";

const TicTacField = ({element, onClick, textColor}) => {
    return (
        <li className='w-[80px] h-[80px] border-2 border-white py-2 px-4 rounded-2xl cursor-pointer flex items-center justify-center font-bold text-5xl text-white'
            onClick={onClick}>
            <p className={clsx(textColor)}
            >{element}
            </p>
        </li>
    );
};

export default TicTacField;