import React from 'react';

const MainBtn = ({text, onClick}) => {
    return (
        <button
            className='flex justify-center items-center py-2 px-4 min-w-[120px] border-2 border-white bg-blue-300 text-cyan-950 rounded-2xl '
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default MainBtn;