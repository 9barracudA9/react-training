import React from 'react';
import clsx from "clsx";

const Btn = ({onClick, text, color}) => {
    return (
        <button onClick={onClick} className={clsx('w-[35px] h-[35px] rounded-3xl', color)}>
            {text}
        </button>
    );
};

export default Btn;