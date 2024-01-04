import React from 'react';
import clsx from "clsx";

const MainBtn = ({text, onClick, width}) => {
    return (
        <button
            className={clsx('flex justify-center items-center py-2 px-4  border-2 border-white bg-blue-300 text-cyan-950 rounded-2xl', width)}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default MainBtn;