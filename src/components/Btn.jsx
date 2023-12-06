import React from 'react';

const Btn = ({...props}) => {
    return (
        <button onClick={props.onClick} className='border-2 border-black px-4 py-2 text-xl rounded min-w-'>
            {props.text}
        </button>
    );
};

export default Btn;